import React from 'react'
import { Button } from 'react-bootstrap';
import { FaRegUser } from "react-icons/fa";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { RiFacebookCircleLine, RiLinkedinBoxLine, RiGithubFill, RiInstagramLine } from "react-icons/ri";

const About = () => {
  return (
    <div >
      <section id="about" className="content-wrapper scroll-offset">
        <div className='container'>
      <h2 className='heading' style={{ display: 'inline-block' }}> <FaRegUser style={{marginTop:'-10px',fontSize:'25px', marginRight:'8px'}}/>About Me :</h2>
      <div className='card card-icon mt-4' >
        <p>As a freelance full stack web developer, I specialize in building robust, scalable websites and applications. With over two years of hands-on experience in technologies like Spring Boot, React.js, MySQL, and Git, I craft custom solutions tailored to meet clients' unique needs, ensuring high-quality outcomes.

My journey as a developer is driven by continuous learning and improvement, staying updated with industry trends to enhance functionality and user experience in every project.

Whether you need a dynamic web application for complex workflows, a responsive website for seamless multi-device experiences, or comprehensive backend development for business operations, I offer expertise and client-focused collaboration.

I take pride in translating ideas into reality, blending technical proficiency with creative insight from consultation to deployment. My commitment to excellence and passion for innovation ensure solutions that exceed client expectations.

Let's collaborate to realize your vision with a fully functional, aesthetically pleasing digital solution. Whether you're a startup establishing your online presence or an established business enhancing digital capabilities, I'm here to help achieve your goals. Together, we'll create something remarkable.</p>
      </div>
      <Button className="btn button-icon1" href="#contact">Contact Me <BsArrowDownCircleFill style={{marginTop:'-3px'}}/></Button>
      <div className="social-links mt-4">
              <a href="https://www.facebook.com/gurazala.srinivas/"   style={{fontSize:'35px'}}><RiFacebookCircleLine className="social-icon1"/></a>
              <a href="https://www.linkedin.com/in/srinivas-gurazala-a30094212/" style={{fontSize:'35px'}}><RiLinkedinBoxLine className="social-icon1"/></a>
              <a href="https://github.com/vasu-09"   style={{fontSize:'35px'}}><RiGithubFill className="social-icon1"/></a>
              <a href="https://www.instagram.com/tricks_and_codes/"   style={{fontSize:'35px'}}><RiInstagramLine className="social-icon1"/></a>
            </div>
      </div>
      </section>
      <style>
        {
            `

            /* Media Query for Desktop View */
            @media only screen and (min-width: 768px) {
              .content-wrapper {
                margin-top: 150px;
                margin-bottom:50px;
                text-align: left;
            }
            }

            /* Media Query for Mobile View */
            @media only screen and (max-width: 767px) {
              .content-wrapper {
                margin-top: 50px;
                margin-bottom:50px;
                text-align: left;
            }
            }

            .scroll-offset {
            scroll-margin-top: 100px; /* Adjust this value based on the height of your header */
          }
            
            .social-icon1 {
                margin: 10px;
                color: black;
                transition: color 0.3s, font-size 0.3s;
            }
            
            .button-icon1 {
                background-color: #4c9900 ;
                border-color: #4c9900;
                margin-top: 20px;
                padding: 5px 25px;
                transition: color 0.3s, font-size 0.3s;
            }
            
            .button-icon1:hover {
                color: #4c9900;
                border-color: #4c9900;
                padding: 8px 30px;
                font-weight: 600;
                background-color: #FFFFFF;
            }
            .social-icon1:hover {
                color: #00CCCC; /* Change to your desired hover color */
                font-size: 45px; /* Increase size on hover */
            }

            .card-icon {
                border: none;
                font-size: 20px;
                text-align:justify;
            }

            /* Media Query for Desktop View */
            @media only screen and (min-width: 768px) {
              .card-icon {
                width: 65%;
                
              }
            }

            /* Media Query for Mobile View */
            @media only screen and (max-width: 767px) {
              .card-icon {
                width: 100%;
              }
            }
            `}
            </style>
    </div>
  )
}

export default About