import React from 'react';

const Footer = (props) => {
  return (
    <div>
    <footer className="site-footer" style={{fontFamily:"Roboto"}}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">With a passion for technology, I have explored and worked on projects involving Machine Learning and Full-Stack Development. I believe that there are many potentially disruptive opportunities by integrating Tech with Finance, and hope to accomplish this in the future.</p>
            <p>I can be easily bribed over with a cup of coffee, so feel free to contact me either on Github or LinkedIn!</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Skill Sets</h6>
            <ul className="footer-links">
              <li>Machine Learning</li>
              <li>Full Stack Development</li>
              <li>Data Science</li>

            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Interests</h6>
            <ul className="footer-links">
              <li>Bartending</li>
              <li>Long Distance Running</li>
              <li>Algorithmic Trading</li>
              <li>Coffee</li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="github" target="_blank" href="https://github.com/marcusfooo"><i className="fa fa-github"></i></a></li>
              <li><a className="linkedin" target="_blank" href="https://www.linkedin.com/in/marcus-foo-86496513a/"><i className="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
    <style jsx>{`
            .site-footer
            {
              background-color:#26272b;
              padding:45px 0 20px;
              font-size:15px;
              line-height:24px;
              color:#737373;
            }
            .site-footer hr
            {
              border-top-color:#bbb;
              opacity:0.5
            }
            .site-footer hr.small
            {
              margin:20px 0
            }
            .site-footer h6
            {
              color:#fff;
              font-size:16px;
              text-transform:uppercase;
              margin-top:5px;
              letter-spacing:2px
            }
            .site-footer a
            {
              color:#737373;
            }
            .site-footer a:hover
            {
              color:#3366cc;
              text-decoration:none;
            }
            .footer-links
            {
              padding-left:0;
              list-style:none
            }
            .footer-links li
            {
              display:block
            }
            .footer-links a
            {
              color:#737373
            }
            .footer-links a:active,.footer-links a:focus,.footer-links a:hover
            {
              color:#3366cc;
              text-decoration:none;
            }
            .footer-links.inline li
            {
              display:inline-block
            }
            .site-footer .social-icons
            {
              text-align:right
            }
            .site-footer .social-icons a
            {
              width:40px;
              height:40px;
              line-height:40px;
              margin-left:6px;
              margin-right:0;
              border-radius:100%;
              background-color:#33353d
            }
            .copyright-text
            {
              margin:0
            }
            @media (max-width:991px)
            {
              .site-footer [className^=col-]
              {
                margin-bottom:30px
              }
            }
            @media (max-width:767px)
            {
              .site-footer
              {
                padding-bottom:0
              }
              .site-footer .copyright-text,.site-footer .social-icons
              {
                text-align:center
              }
            }
            .social-icons
            {
              padding-left:0;
              margin-bottom:0;
              list-style:none
            }
            .social-icons li
            {
              display:inline-block;
              margin-bottom:4px
            }
            .social-icons li.title
            {
              margin-right:15px;
              text-transform:uppercase;
              color:#96a2b2;
              font-weight:700;
              font-size:13px
            }
            .social-icons a{
              background-color:#eceeef;
              color:#818a91;
              font-size:16px;
              display:inline-block;
              line-height:44px;
              width:44px;
              height:44px;
              text-align:center;
              margin-right:8px;
              -webkit-transition:all .2s linear;
              -o-transition:all .2s linear;
              transition:all .2s linear
            }
            .social-icons a:active,.social-icons a:focus,.social-icons a:hover
            {
              color:#fff;
              background-color:#29aafe
            }
            .social-icons.size-sm a
            {
              line-height:34px;
              height:34px;
              width:34px;
              font-size:14px
            }
            .social-icons a.facebook:hover
            {
              background-color:#3b5998
            }
            .social-icons a.twitter:hover
            {
              background-color:#00aced
            }
            .social-icons a.linkedin:hover
            {
              background-color:#007bb6
            }
            .social-icons a.github:hover
            {
              background-color:#6e5494
            }
            @media (max-width:767px)
            {
              .social-icons li.title
              {
                display:block;
                margin-right:0;
                font-weight:600
              }
            }
    `} </style>
    </div>
  );
};

export default Footer;