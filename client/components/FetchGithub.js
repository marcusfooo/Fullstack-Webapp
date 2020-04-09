import fetch from 'isomorphic-unfetch'

function FetchGithub({ repos }) {
  return <div>
      <ul> {repos.map(repo => (
          <ul>
              <li>{repo.name}</li>
              <li>{repo.description}</li> 
              <li>{repo.language}</li>
              <li>{repo.html_url}</li>
              <p>Next</p>
            </ul>
      ))}
      </ul>
  </div>
}

Page.getInitialProps = async ctx => {
  const res = await fetch('https://api.github.com/users/marcusfooo/repos')
  const json = await res.json()
  return { 
    repos: json
  }
}

export default FetchGithub