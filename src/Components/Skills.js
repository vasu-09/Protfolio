// src/Components/Skills.js
import React from 'react';
import { ProgressBar, Container, Row, Col } from 'react-bootstrap';
import { FaPaintBrush, FaCode, FaMobileAlt } from 'react-icons/fa';

const skillsData = [
  { name: 'HTML5', value: 75, variant: 'danger' },
  { name: 'CSS3', value: 75, variant: 'primary' },
  { name: 'jQuery', value: 50, variant: 'dark' },
  { name: 'React', value: 75, variant: 'info' },
  { name: 'Spring Boot', value: 95, variant: 'secondary' },
  { name: 'Spring Security', value: 95, variant: 'success' },
];

const Skills = () => {
  return (
    <section id="skills" className=' content-wrapper scroll-offset'>
    <Container className="my-5">
      <h2>My Skills</h2>
      <p className='mt-4' style={{fontSize:'20px'}}>I Like To Craft Beautiful And Scalable Web Products</p>
      <Row className="align-items-center mt-5">
        <Col md={4}>
          <div className="mb-4">
            <FaPaintBrush size={40} />
            <h4>Design + Development</h4>
            <p>
              Clean, modern designs - optimized for performance, search engines, and converting users to customers.
            </p>
          </div>
          <div className="mb-4">
            <FaCode size={40} />
            <h4>Technology</h4>
            <p>
              Combined all the latest technologies to a progressive website.
            </p>
          </div>
          <div className="mb-4">
            <FaMobileAlt size={40} />
            <h4>Always Responsive</h4>
            <p>
              A responsive design makes your website accessible to all users, regardless of their device.
            </p>
          </div>
        </Col>
        <Col md={8}>
          {skillsData.map((skill, index) => (
            <div key={index} className="mb-3">
              <h5>{skill.name}</h5>
              <ProgressBar now={skill.value} label={`${skill.value}%`} variant={skill.variant} />
            </div>
          ))}
        </Col>
      </Row>
    </Container>
    <style>
        {
            `.content-wrapper {
                margin-top: 150px;
                margin-bottom:50px;
                text-align: left;
            }

            .scroll-offset {
            scroll-margin-top: 100px; /* Adjust this value based on the height of your header */
          }`}</style>
    </section>
  );
};

export default Skills;
