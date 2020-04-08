import React from 'react';

const JumboCard = (props) => {

  return (
    <div className="mainContainer">
      <div className="jumboContainer" style={{display: "inline-block", background: "white"}}>
          <div>
              <div>
              <img src={props.image} alt={props.image_alt} style={{width: "70%", padding: "1.5rem", borderRadius: "2.5rem"}}/>
                 <h1 className="display-3" style={{fontSize: "2.4rem", fontWeight: "400"}}><a target="_blank" href={props.link}><div className="linkPage">{props.title}</div></a></h1>
                 <p>{props.date}</p>
                 <p className="lead" style={{fontSize: "1rem",fontWeight: "700"}} >{props.position}</p>
                 <h2 style= {{fontSize: '1rem', padding:"0 2rem"}}>{props.description}</h2>   
              </div>
          </div>
      </div>
      <style jsx>{`

            .mainContainer {
                text-align: center;
                padding-bottom: 1rem;
                margin: 0 1rem;
                align-items: center;
                margin-bottom: 5rem;
            }
            
           @media (max-width: 768px) {
                    .jumboContainer {
                    width: 90vw;
                    font-family: "Roboto";
                    }

                    .mainContainer {
                        margin-bottom: 5vh;
                        --borderWidth: 3px;
                        background: white;
                        position: relative;
                        border-radius: var(--borderWidth);
                    }

                    .mainContainer:after {
                        content: '';
                        position: absolute;
                        top: calc(-1 * var(--borderWidth));
                        left: calc(-1 * var(--borderWidth));
                        height: calc(100% + var(--borderWidth) * 2);
                        width: calc(100% + var(--borderWidth) * 2);
                        background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
                        border-radius: calc(2 * var(--borderWidth));
                        z-index: -1;
                        animation: animatedgradient 3s ease alternate infinite;
                        background-size: 300% 300%;
                      }

                      @keyframes animatedgradient {
                        0% {
                            background-position: 0% 50%;
                        }
                        50% {
                            background-position: 100% 50%;
                        }
                        100% {
                            background-position: 0% 50%;
                        }
                    }

                }
            @media (min-width: 768px) {
                .jumboContainer {
                font-family: "Roboto";
                max-width: 60vw;
                }

                img {
                    max-height: 50vh;
                }
                
                .mainContainer {
                    margin: 0 35vw;
                    margin-bottom: 5vh;
                    --borderWidth: 3px;
                    background: white;
                    position: relative;
                    border-radius: var(--borderWidth);
                    margin-bottom: 7.5vh;
                }

                .mainContainer:after {
                    content: '';
                    position: absolute;
                    top: calc(-1 * var(--borderWidth));
                    left: calc(-1 * var(--borderWidth));
                    height: calc(100% + var(--borderWidth) * 2);
                    width: calc(100% + var(--borderWidth) * 2);
                    background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
                    border-radius: calc(2 * var(--borderWidth));
                    z-index: -1;
                    animation: animatedgradient 3s ease alternate infinite;
                    background-size: 300% 300%;
                  }

                  @keyframes animatedgradient {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }

                .linkPage {
                    text-decoration: none;
                    color: #3377CC;
                }

                .linkPage:hover {
                    transform: scale(1.15);
                    transition-duration: 0.5s;
                }

            }
        `} </style>
        
    </div>
  );
};

export default JumboCard;