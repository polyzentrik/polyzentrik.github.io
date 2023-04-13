import * as React from "react"
import { Link, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import "../components/pretty.css"
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

const HomePage = ({ data }) => {
  const posts = data.allMdx.nodes

  return (
    <Layout pageTitle="Our services">
      <p className="big-p"><p>We can help you <em>be more sustainable</em>. We can also help you <em>analyse</em>, <em>communicate</em>, and <em>manage</em> sustainability.</p> </p>
      <Row className="mb-2 hello">
        <Col lg={3} className="hidey-lg">
          <Card className="border-2 border-dark">
            <StaticImage src={"../images/graphics/flexibility.jpg"} alt="A close-up picture of follage" />
          </Card>
        </Col>
        <Col lg={9} className="">
          <Container>
            <Row className="">
              {
                posts.map(node => (
                  <Col className="col-12 col-md-6 d-flex services-index">
                    <Card className="mb-2 px-0 mx-0 border-dark">
                      <article key={node.id}>
                        <Card.Title className="checkers pt-4 pb-2 border-bottom border-dark">
                          <h3 className="px-3 small"><Link to={`/services/${node.frontmatter.slug}`}> {node.frontmatter.title} </Link></h3>
                        </Card.Title>
                        <Card.Body>
                          <Card.Text>
                            <p className="pb-sm-1 pb-md-auto">{node.frontmatter.intro}</p>
                          </Card.Text>
                          <Link to={`/services/${node.frontmatter.slug}`}>
                            <Button variant="info" className="special-bg pink float-end mb-3 border border-1 border-dark">Learn more...</Button>
                          </Link>
                        </Card.Body>
                      </article>
                    </Card>
                  </Col>
                ))
              }
            </Row>
          </Container>
        </Col>
      </Row>
    </Layout >
  )
}

export const query = graphql`
  query {
    allMdx(
      sort: {frontmatter: {rank: DESC}}
      filter: {frontmatter: {type: {eq: "services"}}}
      ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          type
          slug
          intro
          rank
        }
        id
      }
    }
  }
`


export const Head = () => (
  <Seo title="Polyzentrik > Home"
    description="Digital tools and services to help you at different stages of your sustainability journey." />
)

export default HomePage