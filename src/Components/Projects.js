// src/Components/RecentProjects.js
import React, { useState } from 'react';
import { Card, Button, Row, Col, Container, Modal } from 'react-bootstrap';
import project1 from './Screenshot (83).png';
import project2 from './Screenshot (62).png';
import project3 from './Screenshot (114).png';

const Projects = () => {
    const [activeSection, setActiveSection] = useState('')
    const [show, setShow] = useState(false);

    const handleShow = (section) => {
        setActiveSection(section);
        setShow(true);
    }

    const handleClose = () => {
        setShow(false);
        setActiveSection('');
    }

    const renderContent = () => {
        switch (activeSection) {
            case 'P1':
                return (
                    <div>
                        <h4>Food Delivery App</h4>
                        <img src={project1} alt="Project 1" className="img-fluid img-adjust" />
                        <h6 className='mt-3'>Description:</h6>
                        <p className='mt-3'>I developed a robust Food Delivery App using Spring and ReactJS, integrating Spring Security for enhanced protection. Key features include intuitive food category browsing, seamless cart management, precise location services powered by Google Maps API, and secure payments facilitated through Razorpay. Users enjoy functionalities such as order tracking, address editing, and account management, ensuring a seamless and secure food ordering experience.</p>
                        <p className='mt-4'>To know the more functionality please do watch this YouTube video: <a href='https://youtu.be/aDT3oS1qNjA?si=xEOAho8I_Iq_cI6Z'>https://youtu.be/aDT3oS1qNjA?si=xEOAho8I_Iq_cI6Z</a></p>
                    </div>
                )
            case 'P2':
                return (
                    <div>
                        <h4>Admin Dashboard</h4>
                        <img src={project2} alt="Project 2" className="img-fluid img-adjust" />
                        <h6 className='mt-3'>Description:</h6>
                        <p>In the Food Delivery App, I've developed an extensive admin interface. Administrators can access a comprehensive dashboard to monitor real-time order statuses. They can efficiently manage orders by accepting new ones and reviewing completed transactions. User data management capabilities allow administrators to access and analyze user information, including detailed order histories, ensuring efficient oversight and operational control of the platform.</p>
                        <p className='mt-4'>To know the more functionality please do watch this YouTube video: <a href='https://youtu.be/aDT3oS1qNjA?si=xEOAho8I_Iq_cI6Z'>https://youtu.be/aDT3oS1qNjA?si=xEOAho8I_Iq_cI6Z</a></p>
                    </div>
                )
            case 'P3':
                return (
                    <div>
                        <h4>Blogging Page</h4>
                        <img src={project3} alt="Project 3" className="img-fluid img-adjust" />
                        <h6 className='mt-3'>Description:</h6>
                        <p>I've developed a dynamic blogging platform using Spring Boot and ReactJS, featuring a user-friendly interface where users can explore articles, categories, and engage through comments. The admin portal empowers administrators to manage categories, articles, and user interactions seamlessly. Integration of TinyMCE ensures easy crafting and editing of articles. The platform also includes customizable features like an About page, enhancing user engagement and administrative control.</p>
                        <p className='mt-4'>You can view the code on GitHub by visiting the below links.<br/>Front End:<a href='https://github.com/vasu-09/Tricks-Code_Blog_Front_End'>https://github.com/vasu-09/Tricks-Code_Blog_Front_End</a><br/>Backend:<a href='https://github.com/vasu-09/Tricks-Codes_Blog_Backend'>https://github.com/vasu-09/Tricks-Codes_Blog_Backend</a></p>
                    </div>
                )
            default:
                return null;
            }
    }
  return (
    <section id='projects' className="content-wrapper scroll-offset">
    <Container className="mt-5 ">
      <h2 >Recent projects :</h2>
      <p className='mt-4' style={{fontSize:'20px'}} >
        Below you can see some examples of my recent work. Check out my complete <a href="#home">portfolio</a>.<br/>
        Have a project you would like to discuss? <a href="#contact">Let's make something great together!</a>
      </p>
      <Row className="mt-4 justify-content-center">
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src={project1} />
            <Card.Body>
              <Card.Title>Food Delivery App</Card.Title>
              <Card.Text>
              Food delivery app with browsing, cart management, location services, secure payments, order history.
              </Card.Text>
              <Button variant="dark" onClick={() => handleShow('P1')}>View project →</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src={project2} />
            <Card.Body>
              <Card.Title>Admin Dashboard</Card.Title>
              <Card.Text>
              Admin interface for food app: monitor, manage new orders, view completed ones, review user data.
              </Card.Text>
              <Button variant="dark" onClick={() => handleShow('P2')}>View project →</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src={project3} />
            <Card.Body>
              <Card.Title>Blogging page</Card.Title>
              <Card.Text>
              Blog platform with Spring Boot and ReactJS: browse articles, leave comments, admin manages content.
              </Card.Text>
              <Button variant="dark" onClick={() => handleShow('P3')}>View project →</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Project Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {renderContent()}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
    <style>
        {
            `.content-wrapper {
                margin-top: 130px;
                margin-bottom:50px;
                text-align: left;
            }
            
            .scroll-offset {
            scroll-margin-top: 100px; /* Adjust this value based on the height of your header */
          }`}
    </style>
    </section>
  );
}

export default Projects;
