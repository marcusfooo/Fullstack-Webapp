import React, { Component } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import JumboCard from '../components/JumboCard'
import MyEthos from '../components/Ethos'
import Technology from '../components/Technology'
import Footer from '../components/Footer'

const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wow.js') : null 

export class index extends Component {
  componentDidMount() { 
    new WOW().init() 
  } 
  render() {
    return (
      <div className="main">

        {/* Top banner section */}

        <Head>
        <title>I'm Marcus Foo</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css"></link>
        </Head>
        
        <Layout />
        <Hero />   
        <div className="headerContainer wow slideInUp" data-wow-offset="20">
          <div className="line"></div>
          <h1 className="sectiontitle" >Here's what I've done so far</h1>
          <div className="line"></div>
        </div>
         

      {/* Experiences section */}   

      <div className="wow slideInLeft" data-wow-offset="20">
          <JumboCard 
          image="/Temasek.jpg"
          image_alt="Temasek Image"
          link="https://www.temasek.com.sg/en/index"
          title="Temasek Holdings"
          date="(May 2020 - Present)"
          position="Incoming Software Engineering Intern"
          description="Part of the Temasek Digital Team. Working closely with other team members in an agile setup to develop software for digital initiatives, leveraging big data, machine learning and cloud technologies."
          />
      </div>
       
      <div className="wow slideInRight" data-wow-offset="20">
          <JumboCard 
          image="/saturday_kids.png"
          image_alt="Saturday Kids Image"
          link="https://www.saturdaykids.com/"
          title="Saturday Kids"
          date="(Jan 2020 - Present)"
          position="Python Instructor"
          description="Selected as a Python Instructor for the Bukit Panjang library students. In collaboration with Google and IMDA, I led a group of assistants to teach a class of 18 students."
          />
      </div>
      
      <div className="wow slideInLeft" data-wow-offset="20">
          <JumboCard 
          image="/ntu.jpg"
          image_alt="NTU Image"
          link="https://www.ntu.edu.sg/Pages/home.aspx"
          title="NTU"
          date="(Aug 2019 - Present)"
          position="Double Degree in Business Analytics & Computer Science"
          description={<ul>
            <li>Technical Director at Nanyang Open Source Society</li>
            <li>Business Manager at Nanyang Banking & Finance Club</li>
            </ul>}
          />
      </div>
      

      {/* Ethos section */}  

      <div className="headerContainer wow slideInUp" data-wow-offset="20">
        <div className="line"></div>
        <h1 className="sectiontitle" >My Ethos</h1>
        <div className="line"></div>
      </div>
      
      <div className="wow slideInUp" data-wow-offset="20">
        <MyEthos />
      </div>
      


      {/* Technology section */} 


      <div className="headerContainer wow slideInUp" data-wow-offset="20">
        <div className="line"></div>
        <h1 className="sectiontitle" >Technology Stack<p style={{fontFamily:"Roboto", fontWeight:"500", fontSize:"1.75rem"}}>My Website Architecture</p></h1>
        <div className="line"></div>
      </div>
      <div className="wow slideInUp" data-wow-offset="20">
        <Technology />
      </div>
      


      {/* Footer section */}
      

      <Footer />


      <style jsx>{`
            .main {
              overflow: hidden;
            }
            .headerContainer {
              display: flex;
              justify-content: center;
            }

            .sectiontitle {
              text-align: center;
              color: black;
              margin: 45px 25px;
              font-size: 2.5rem;
              font-weight: bold;
            }

            .line {
              width: 25vw;
              height: 5px;
              background: #404040;
              margin: 70px 2vw;
              border-radius: 15px;
            }

            @media (max-width: 768px) {
              .sectiontitle {
                  font-size:1.5rem;
                  margin: 55px 10px;
              }
            }
       `} </style>
      </div>

      
    )
  }
}

export default index
