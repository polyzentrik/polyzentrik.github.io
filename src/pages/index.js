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
      <Row className="mb-2 hello">
        <Col lg={3} md={12} className="mb-2">
          <p className="big-p">Polyzentrik aims to help businesses be sustainable in a way that is also profitable.</p>
        </Col>
        <Col lg={3} md={10} className="my-2 offset-md-1 offset-lg-0">
          <Card>
            <StaticImage src={"../images/graphics/goal.jpg"} alt="A landscape"/>
            <Card.Body>
              <Card.Title>Clear philosophy</Card.Title>
              <Card.Text>
                <p>The relationship between sustainability and profitability is not a <em>win-win</em> but a <em>need-need</em>. Sustainability solutions must be profitable to withstand the test of time.</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={10} className="my-2 offset-md-1 offset-lg-0">
          <Card>
            <StaticImage src={"../images/graphics/philosophy.jpg"} alt="A landscape"/>
            <Card.Body>
              <Card.Title>Paradigm agnostic</Card.Title>
              <Card.Text>
                <p>Many sustainability paradigms – SDGs, ESG, Supply Chain Governance, <em>etc.</em> – are good if well implemented and combined, bad otherwise. It's about doing it right.</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={10} className="my-2 offset-md-1 offset-lg-0">
          <Card>
            <StaticImage src={"../images/graphics/flexibility.jpg"} alt="A landscape"/>
            <Card.Body>
              <Card.Title>Versatile</Card.Title>
              <Card.Text>
                <p>We adapt to you and the tools and systems you have in place, not the other way around. If we cannot do it in-house, we'll find someone who can.</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Layout>
  )
}

export const Head = () => (
  <Seo title="Polyzentrik > Home"
    description="Welcome! Polyzentrik offers digital solutions to help you become more profitable and sustainable." />
)

export default HomePage