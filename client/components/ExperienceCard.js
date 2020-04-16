import React from 'react';

const ExperienceCard = (props) => {

  return (
      <div style={{textAlign:"center", fontFamily:"Roboto"}}>
            <div className="mainContainer">
                <div className="imageContainer">
                    <img src={props.image} alt={props.image_alt}></img>
                </div>
                <div className="subContainer">
                    <a target="_blank"  className="company" href={props.link}>{props.title}</a>
                    <p className="jobTitle">{props.position}, {props.date}</p>
                    <p className="country">{props.country}</p>
                    <p className="jobDescription">{props.description}</p>
                </div>
          </div>
        

    <style jsx>{`
        .mainContainer {
            display: flex;
        }
        .subContainer {
            display: flex;
            flex-direction: column;         
        }

        .container {
            display:inline-block;
        }

        img {
            border-radius: 20px;
        }

        .company {
            font-size: 2rem;
            color: #3377cc;
            font-weight: 500;
        }

        .jobTitle {
            font-size: 1.5rem;
            color: #5e9516;
            font-weight: 500;

        }

        .country {
            color: #50555c;
            font-weight: 700;
        }

        a:hover {
            color: #0080ff;
            text-decoration: none;
            transition-duration: 0.5s            
        }

        @media (max-width: 1000px) {
            .mainContainer {
                margin: 5vh 5vw;
                display: flex;
                flex-direction: column

            }
            
            img {
                max-width: 80vw
            }
        }

        @media (min-width: 1000px) {
            .mainContainer {
                margin: 5vh auto;
                max-width: 50vw
            }

            .subContainer {
                text-align: left;
                height: 30vh
            }

            .imageContainer {
                display: flex;
                flex-direction: inline-flex;
                align-items: center;
            }

            img {
               width: 20vw
            }
            
            .company {
                padding-left: 2rem
            }

            .jobTitle {
                padding-left: 2rem
            }

            .country {
                padding-left: 2rem
            }  

            .jobDescription {
                padding-left: 2rem
            }
        }
    `} </style>
      </div>
    
            
  );
};

export default ExperienceCard;