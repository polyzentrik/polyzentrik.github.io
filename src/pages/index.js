import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import "../components/pretty.css"

const HomePage = ({ data }) => {
  return (
    <Layout pageTitle="Welcome">
      <p className="big-p">We offer tools and services that can help you at different stages of your digital sustainability journey.</p>
      <Row className="mb-2 hello">
        <Col lg={3} className="d-flex">
          <Card>
            <StaticImage src={"../images/graphics/flexibility.jpg"} alt="A close-up picture of follage" />
          </Card>
        </Col>
        <Col lg={9} className="d-flex">
          <Row>
            <Col lg={6} md={10} className="offset-md-1 offset-lg-0 d-flex">
              <Card className="w-100 my-3">
                <Card.Body className="p-0">
                  <Card.Title className="checkers py-3 px-2 border-bottom border-1">Be more sustainable</Card.Title>
                  <Card.Text className="mx-3">
                    <p>We can help you lower the impact of your digital activities, which can also help you reduce digital infrastructure costs.</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} md={10} className="offset-md-1 offset-lg-0 d-flex">
              <Card className="w-100 my-3">
                <Card.Body className="p-0">
                  <Card.Title className="checkers py-3 px-2 border-bottom border-1">Research/assess sustainability</Card.Title>
                  <Card.Text className="mx-3">
                    <p>We can offer you digital resources to help you analyse sustainability more effectively.</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} md={10} className="offset-md-1 offset-lg-0 d-flex">
              <Card className="w-100 my-3">
                <Card.Body className="p-0">
                  <Card.Title className="checkers py-3 px-2 border-bottom border-1">Communicate sustainability</Card.Title>
                  <Card.Text className="mx-3">
                    <p>We can help you boost your online presence and online sustainability communications.</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} md={10} className="offset-md-1 offset-lg-0 d-flex">
              <Card className="w-100 my-3 checkers">
                <Card.Body className="p-0">
                  <Card.Title className="py-3 px-2 border-bottom border-1 border-white">Sustainability Reporting</Card.Title>
                  <Card.Text className="mx-3">
                    <p>Sustainability reporting involves a little of all previous challenges. We can help you across your sustainability reporting needs.</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout >
  )
}

export const Head = () => (
  <Seo title="Polyzentrik > Home"
    description="Welcome! Digital solutions to help analyse and communicate sustainability. Websites that are, all, fast, beautiful, and sustainable." />
)

export default HomePage