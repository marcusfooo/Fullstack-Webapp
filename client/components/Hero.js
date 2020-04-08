import Head from 'next/head'

export default function Hero() {
    return (      
        <div className="hero-image">
            <img src="/Hero.jpg" alt="my image" />
            <div className="hero-text">
                <p>Hey I'm</p>
                <h1>Marcus Foo</h1>
                <h2>and I'm an aspiring Software Engineer</h2>
                <div style={{textAlign: 'center'}}><div className="line" style={{height: '5px', width: '15vw', background: 'white', display: 'inline-block'}}></div></div>
                
            </div>
            <style jsx>{`
                .hero-image {                  
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    position: relative;
                }

                img {
                    overflow-x: hidden hidden;
                    width:100vw;
                    filter: blur(8px);
                    height: 115vh
                }

                .hero-text {
                    text-align: center;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    color: white;
                  }

                  h1 {
                      font-size:5rem;
                      font-style: bold;
                  }

                  p {
                      font-size: 1.5rem;
                      font-style: italic;
                  }
            `} </style>
        </div>
    );
  }