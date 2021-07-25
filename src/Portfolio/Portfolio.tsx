import { Container, Button, Row, Col } from "react-bootstrap"
import './Portfolio.scss';

const thePortfolio = require('./portfolio.json');

export default function Portfolio() {
  console.log(thePortfolio)
  return (
    <div className="outer-portfolio" id="portfolio">
      <Container className="text-white">
        <h3>Portfolio</h3>
        <ul className="list-portfolio">
          {thePortfolio.map((element: any, index: number) => {
            return (
              <li className="inner-list" key={index}>
                <Row>
                  <Col md={4}>
                    <img className="img-company" src={element.image} alt="Company" height="50" />
                  </Col>
                  <Col md={8}>
                    <p className="title-job">{element.name}</p>
                    <span className="major">About: {element.detail}</span>
                    <br />
                    <span className="major">Tech Stack: {element.tech}</span>
                    <br />
                    {element.url === '-' ? "" : <Button className="mt-3" href={element.url} variant="outline-light">Check</Button>}
                  </Col>
                </Row>
              </li>
            )
          })}
        </ul>
      </Container>
    </div>
  )
}