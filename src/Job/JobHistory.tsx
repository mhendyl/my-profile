import React from "react";
import { Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import './JobHistory.scss'

const jobData = require('./job-history.json');

export default function JobHistory() {
  return (
    <div className="outer-job">
      <Container>
        <ul className="list-job">
          {jobData.map((element: any, index: number) => {
            return (
              <li className="inner-list" key={index}>
                <Row>
                  <Col md={4}>
                    <img className="img-company" src={element.image} alt="Company" height="50" />
                  </Col>
                  <Col md={8}>
                    <p className="title-job">{element.company}</p>
                    <span className="start-date">{element.start} - {element.graduated}</span>
                    <br />
                    <span className="major">Position: {element.position}</span>
                    <br />
                    <span className="major">Based: {element.location}</span>
                  </Col>
                </Row>
              </li>
            )
          })}
        </ul>
      </Container>
    </div >
  )
}