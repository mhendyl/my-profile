import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Home.scss'
import MySelf from './images/me-animation.png';

const dataEducation = require('./education.json');

const theEducation = dataEducation.map((el: any, index: number) => {
  return (
    <li className="inner-list" key={index}>
      <p className="title-education">{el.name}</p>
      <span className="start-date">{el.start} - {el.graduate}</span>
      <br />
      <span className="major">Major: {el.major}</span>
    </li>
  )
})

export default function Home() {
  return (
    <div className="outer-home" id="home">
      <Container>
        <Row>
          <Col md={4} className="text-center">
            <img alt="myself" src={MySelf} height="300" />
          </Col>
          <Col className="text-white m-auto" md={8}>
            <h1 className="my-name">Mochammad Hendy Lazuardi</h1>
            <p className="about-me">Hi everyone, introduce my self Hendy, Frontend Developer from D.I. Yogyakarta, Indonesia.
              I already 3 years in Frontend Developer. I was graduated from University Amikom Yogyakarta in 2018 with GPA 3.49. I already
              create project such as B2B and B2C with payment gateway. Click button bellow to see what i already create!</p>
            <Button href="#portfolio" variant="outline-light">Portfolio</Button>
          </Col>
          <Col md={12} className="mt-5">
            <h3 className="text-white">Education History</h3>
            <ul className="list-education">
              {theEducation}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}