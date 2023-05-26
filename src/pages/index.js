import React from "react"
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Seo from '../components/seo'
import ServicesComponent from '../components/services'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "../components/pretty.css"
import MissionComponent from "../components/mission"

const HomePage = ({ data }) => {
  const posts = data.allMdx.nodes.filter(node => node.frontmatter.type === "blog")

  return (
    <Layout pageTitle="Welcome">
      <MissionComponent />
      <Row className="text-center home-blog-index shadow my-5 py-5">
        <Container fluid className="my-auto">
          <Row className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
            <Col lg={3} className="d-flex">
              <Container className="my-md-auto">
                <h3 className="my-md-auto pzntrk">Latest from our blog</h3>
                <p className="word-breakie">We regularly publish fairly decent content about data, AI, and digital sustain&shy;ability.</p>
                <Link to={`/blog/`}>
                  <Button variant="dark" className="big-p border w-100 mb-3">Go to blog</Button>
                </Link>
              </Container>
            </Col>
            <Col lg={9}>
              <Container>
                <Row className="d-flex">
                  {
                    posts.map(node => (
                      <Col md={4} className="px-0 my-md-auto">
                        <article key={node.id}>
                          <Card className="m-1 shadow">
                            <Link to={`/${node.frontmatter.type}/${node.frontmatter.slug}`}>
                              <GatsbyImage image={getImage(node.frontmatter.hero_image)} alt="Placeholder image" />
                            </Link>
                            <Card.Body className="p-0">
                              <Card.Title className="p-2">
                                <h4 className="px-2 small"><Link to={`/${node.frontmatter.type}/${node.frontmatter.slug}`}> {node.frontmatter.title}</Link></h4>
                              </Card.Title>
                              <Card.Text className="p-3 checkers">
                                <p>{node.excerpt}</p>
                              </Card.Text>
                              <Link to={`/${node.frontmatter.type}/${node.frontmatter.slug}`}>
                                <Button variant="light" className="pink float-end mb-3 border mx-3">Read more...</Button>
                              </Link>
                            </Card.Body>
                          </Card>
                        </article>
                      </Col>

                    ))
                  }
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </Row>
      <ServicesComponent />
    </Layout >
  )
}

export const query = graphql`
query {
  allMdx(
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {type: {eq: "blog"}}}
    limit: 3) 
    {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
        type
        slug
        categories
        author
        hero_image {
          childImageSharp {
            gatsbyImageData  (
              layout: FULL_WIDTH
              )
          }
        }
      }
      id
      excerpt
    }
  }
}
`

export const Head = () => (
  <Seo title="Polyzentrik > Home"
    description="Digital resources to help you at different stages of your sustainability journey." />
)

export default HomePage