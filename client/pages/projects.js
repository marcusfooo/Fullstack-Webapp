import Layout from '../components/Layout'
import Head from 'next/head'
import Footer from '../components/Footer'
import ProjectTable from '../components/ProjectTable'


export default function About() {
    return (      
      <div>
           <Head>
            <title>Projects</title>
        </Head>
        <Layout />
        <div style={{textAlign: "center", marginTop:"15vh", marginBottom:"5vh"}}>
          <a className="githublink" target="_blank" href="https://github.com/marcusfooo">Visit my Github Page!</a>
        </div>
        
        <ProjectTable />
        
        <style jsx>{`

          .githublink {
            padding: 20px 40px;
            background: none;
            border: none;
            position: relative;
            text-transform: uppercase;
            font-weight: bold;
            letter-spacing: 3px;
            cursor: pointer;
            
          }

          .githublink :after, .githublink :before {
            content: '';
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          border: 2px solid #000;
          transition: transform .2s ;
          }

          .githublink :after {
              transform: translate(3px, 3px);
            }
                
            .githublink :before {
              transform: translate(-3px, -3px);
            }

        `} </style>
      </div>
    );
  }