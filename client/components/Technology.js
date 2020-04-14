import React from 'react';
import {
  Card, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

const Technology = (props) => {
  return (
    <CardDeck style={{fontFamily:"Roboto", marginBottom:"5vh"}}>
      <Card>
        <CardImg top width="100%" src="/frontend.png" alt="Card image cap" />
        <CardBody>
          <CardTitle style={{textAlign:"center", fontWeight:"500", fontSize:"2rem"}}>Front-End</CardTitle>
          <CardSubtitle style={{fontWeight:"500",fontSize:"1.25rem"}}>ReactJs/ NextJS/ ReactStrap</CardSubtitle>
          <CardText style={{paddingTop:"0.6rem"}}>
              <ul>
                <li>Components styled using ReactStrap</li>
                <li>Components written using ES6 and ReactJS Framework</li>
                <li>Multi page Server Side Rendering and Routing through NextJS</li>
              </ul></CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/backend.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle style={{textAlign:"center", fontWeight:"500", fontSize:"2rem"}}>Back-End</CardTitle>
          <CardSubtitle style={{fontWeight:"500",fontSize:"1.25rem"}}>NodeJS/ Express/ GraphQL/ MySQL</CardSubtitle>
          <CardText style={{paddingTop:"0.6rem"}}>
              <ul>
                  <li>Event-driven Architecture using NodeJS backend</li>
                  <li>Apollo server App with Express Middleware</li>
                  <li>GraphQL API endpoint integrated with Sequelize</li>
                  <li>MySQL Database volume for storing Github repositories</li>
              </ul>
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/deployment.png" alt="Card image cap" />
        <CardBody>
          <CardTitle style={{textAlign:"center", fontWeight:"500", fontSize:"2rem"}}>Deployment/ Networking</CardTitle>
          <CardSubtitle style={{fontWeight:"500",fontSize:"1.25rem"}}>Docker/ NGINX/ Jenkins/ DigitalOcean</CardSubtitle>
          <CardText style={{paddingTop:"0.6rem"}}>
              <ul>
                  <li>Reverse Proxy Routing through NGINX</li>
                  <li>Microservice Architecture and Container Orchestration through Docker Compose</li>
                  <li>Deployed on a DigitalOcean Ubuntu VPS</li>
                  <li>Continuous Integration and Deployment through Jenkins</li>
              </ul></CardText>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default Technology;