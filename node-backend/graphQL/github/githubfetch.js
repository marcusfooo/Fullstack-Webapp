require('isomorphic-fetch');
require('dotenv').config()
var { connect_db } = require('../../mysql/connect_db')

const query = `
query {
    user(login: "marcusfooo") {
      repositories(first: 100, isFork: false) {
        nodes {
          name
          description
          url
          primaryLanguage {name}
        }
      }
    }
  }
`;
const auth = process.env.SECRET_KEY;
const url = process.env.GITHUB_URL;

function fetchGithub(url, query, auth) {
  var values = []

  //Establish MySQL connection
  var connection = connect_db();

  //Fetch from Github
  fetch(url, {
    method: 'POST',
    headers: { 
      'Authorization': 'Bearer ' + auth,
      'Content-Type': 'application/json'
      
    },
    body: JSON.stringify({ query: query }),
  })
    .then(res => res.json())
    .then(res => res.data.user.repositories.nodes)
    .then(res => {
      for(var i=0; i< res.length; i++) {
        values.push([i+1,res[i].name,res[i].description,res[i].url,res[i].primaryLanguage]);
      } 
      
      for(var i=0; i< values.length; i++) {
        var str = JSON.stringify(values[i][4])
        values[i][4] = str.substr(9, str.length-11)
      } 
      
      //Create table if it doesn't exist
      connection.query('CREATE TABLE IF NOT EXISTS db.Repos (id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, name VARCHAR(200) NULL, description VARCHAR(500) NULL, url VARCHAR(200) NULL, language VARCHAR(100) NULL)'
      , function(err,result) {
        if(err) {
           console.log('Error');
        }
        console.log("Table created!")
      });  

      //Delete all existing rows
      connection.query('TRUNCATE TABLE db.Repos', function(err,result) {
        if(err) {
           console.log('Error');
        }
        console.log("Table refreshed!")
      });  

      //Insert fetched data
      for(var i = 0; i < values.length; i++){
        var post  = values[i]    
        connection.query('INSERT INTO db.Repos (id, name, description, url, language) VALUES (?,?,?,?,?)', post, function(err,result) {
          if(err) {
             console.log('Error');
          }
          console.log("Entry added successfully!")
        });

        
    }    

      
    })
    
}

module.exports = {
  fetchGithub,
  url,
  query,
  auth
};