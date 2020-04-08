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
          <CardText>
              <ul>
                <li>Single page Web apps written in ReactJS</li>
                <li>Components mainly made with ReactStrap</li>
                <li>Multi page Server Side Rendering through NextJS</li>
              </ul></CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/backend.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle style={{textAlign:"center", fontWeight:"500", fontSize:"2rem"}}>Back-End</CardTitle>
          <CardSubtitle style={{fontWeight:"500",fontSize:"1.25rem"}}>NodeJS/ Express/ GraphQL</CardSubtitle>
          <CardText>
              <ul>
                  <li>Express Server routing</li>
                  <li>NodeJS backend for single execution thread based architecture</li>
                  <li>GraphQL API implementation instead of REST</li>
              </ul>
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/deployment.png" alt="Card image cap" />
        <CardBody>
          <CardTitle style={{textAlign:"center", fontWeight:"500", fontSize:"2rem"}}>Deployment</CardTitle>
          <CardSubtitle style={{fontWeight:"500",fontSize:"1.25rem"}}>Docker/ Jenkins/ DigitalOcean</CardSubtitle>
          <CardText>
              <ul>
                  <li>Spun up VPS using DigitalOcean</li>
                  <li>Container Orcchestration through Docker Compose</li>
                  <li>Continuous Integration and Deployment through Jenkins</li>
              </ul></CardText>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default Technology;