import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import avatar from './avatar.png';
import { RiFacebookCircleLine, RiLinkedinBoxLine, RiGithubFill, RiInstagramLine } from "react-icons/ri";
import { BsArrowDownCircleFill } from "react-icons/bs";

const SMARTLINK_URL =
  "https://www.effectivegatecpm.com/ixvhvqk4fv?key=fb6f3da617c5c62200d7528d3b32050e";

const Home = () => {
  return (
    <div className='container'>
      <section id="home" className="hero-section scroll-offset">
        <div className='card' style={{ border: 'none' }}>
          <Row className="align-items-center flex-column-reverse flex-md-row">
            <Col md={6} className='mt-6 content-wrapper'>
              <h1>
                Hi There, <br /> I'm <span className="text-primary">Srinivas,</span> <span className="text-warning">Gurazala</span>
              </h1>
              <p style={{ color: 'GrayText', fontSize: '20px', fontWeight: '500' }}> I Am Into <span style={{ color: '#99004C' }}>Web Development</span></p>
              <Button className="btn button-icon" href="#about">About Me <BsArrowDownCircleFill style={{ marginTop: '-3px' }} /></Button>
              <div className="social-links mt-4">
                <a href="https://www.facebook.com/gurazala.srinivas/" style={{ fontSize: '35px' }}><RiFacebookCircleLine className="social-icon" /></a>
                <a href="https://www.linkedin.com/in/srinivas-gurazala-a30094212/" style={{ fontSize: '35px' }}><RiLinkedinBoxLine className="social-icon" /></a>
                <a href="https://github.com/vasu-09" style={{ fontSize: '35px' }}><RiGithubFill className="social-icon" /></a>
                <a href="https://www.instagram.com/tricks_and_codes/" style={{ fontSize: '35px' }}><RiInstagramLine className="social-icon" /></a>
              </div>
             <div className="mt-4">
                <Button
                  variant="warning"
                  href={SMARTLINK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Sponsored Offers
                </Button>
              </div>
            </Col>
            <Col md={6} className='img-col'>
              <img src={avatar} alt="Avatar" className="img-fluid rounded-circle img-adjust" />
            </Col>
          </Row>
        </div>
      </section>
      <style>
        {`
          .img-adjust {
            max-width: 70%;
            height: 70%;
          }
          
          .scroll-offset {
            scroll-margin-top: 100px; /* Adjust this value based on the height of your header */
          }

          .social-icon {
            margin: 10px;
            color: black;
            transition: color 0.3s, font-size 0.3s;
          }

          .button-icon {
            background-color: #6600CC;
            margin-top: 20px;
            padding: 5px 25px;
            transition: color 0.3s, font-size 0.3s;
          }

          .button-icon:hover {
            color: #6600CC;
            padding: 8px 30px;
            font-weight: 600;
            background-color: #FFFFFF;
          }

          .social-icon:hover {
            color: #6666FF; /* Change to your desired hover color */
            font-size: 45px; /* Increase size on hover */
          }

          @media (max-width: 767px) {
            .img-col {
              order: 1; /* Display image first */
              margin-top: 100px;
            }
          }
          @media (max-width: 767px) {
          .content-wrapper {
              margin-Top: 10px
            }
        }
             @media only screen and (min-width: 768px) {             
              .img-col {
              margin-top: 220px;
            }
            }

            @media only screen and (min-width: 768px) { 
            .content-wrapper {
              text-align: left;
              margin-top: 350px;
              }
        }
        `}
      </style>
    </div>
  );
}

export default Home;
