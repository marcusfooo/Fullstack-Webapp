import React from 'react';
import { Table } from 'reactstrap';
import fetch from 'isomorphic-unfetch';



class ProjectTable extends React.Component{
  constructor(props) {
    super(props);
    this.state = { data: [{}]};
    this.fetchGithub = this.fetchGithub.bind(this)
  }
  componentDidMount(){
    this.fetchGithub()
 }
  fetchGithub() {    
    const query = `
    query {
      repos {
        id
        name
        description
        url
        language
      }
    }
    `;
  const url = "/graphql";
  fetch(url, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json'      
    },
    body: JSON.stringify({ query: query }),
  })
    .then(res => res.json())
    .then(res => this.setState({data: res.data.repos}))

}
  render() {
   
    return (
      <div style={{textAlign:"center"}}>
        <div style= {{maxWidth:"80vw", display: "inline-block", fontFamily:"Roboto"}}>
        <Table bordered>
        <thead style={{background:"#808080", borderStyle:"inset"}}>
        <tr>
          <th>ID</th>
          <th>Repository Name</th>
          <th>Description</th>
          <th>Language</th>
        </tr>
      </thead>
        {this.state.data.map(row => <tr scope="row"><td>{row.id}</td><td><a href target="_blank" href={row.url}>{row.name}</a></td><td>{row.description}</td><td>{row.language}</td></tr> )}
        </Table>
        </div>
        
      </div>
      
  );
  }
  
}

export default ProjectTable;