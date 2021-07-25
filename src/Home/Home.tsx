import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Home.scss'
import MySelf from './images/me-animation.png';

export default function Home() {
  return (
    <div className="outer-home">
      <Container>
        <Row>
          <Col md={4}>
            <img alt="myself" src={MySelf} height="300" />
          </Col>
          <Col className="text-white m-auto" md={8}>
            <h1 className="">Mochammad Hendy Lazuardi</h1>
            <p className="about-me">Hi everyone, introduce my self Hendy, Frontend Developer from D.I. Yogyakarta, Indonesia. 
            I already 3 years in Frontend Developer. I was graduated from University Amikom Yogyakarta in 2018 with GPA 3.49. I already
            create project such as B2B and B2C with payment gateway. Click button bellow to see what i already create!</p>
            <Button variant="outline-light">Portfolio</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}