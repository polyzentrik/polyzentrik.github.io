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

const HomePage = ({ data }) => {
  const posts = data.allMdx.nodes.filter(node => node.frontmatter.type === "blog")

  return (
    <Layout pageTitle="Welcome">
      
      <Row className="text-center homepage-blog-index">
        <Container className="col-8 offset-">
          <Row>
            <Col lg={3} className="d-flex">
              <Container className="my-md-auto">
                <h3 className="my-md-auto pzntrk">Latest from our blog</h3>
                <p className="big-p">We also regularly publish fairly decent content about data, AI, and digital sustainability.</p>
                <Link to={`/blog/`}>
                  <Button variant="dark" className="big-p pink border w-100">Go to blog</Button>
                </Link>
              </Container>
            </Col>
            <Col lg={9}>
              <Container>
                <Row className="d-flex">
                  {
                    posts.map(node => (
                      <Col md={12} lg={4} className="px-0 my-md-auto">
                        <article key={node.id}>
                          <Card className="m-1">
                            <Link to={`/${node.frontmatter.type}/${node.frontmatter.slug}`}>
                              <GatsbyImage image={getImage(node.frontmatter.hero_image)} alt="Placeholder image" />
                            </Link>
                            <Card.Body className="px-0 pt-0">
                              <Card.Title className="py-3 bg-white">
                                <h4 className="px-2"><Link to={`/${node.frontmatter.type}/${node.frontmatter.slug}`}> {node.frontmatter.title}</Link></h4>
                              </Card.Title>
                              <Card.Text className="px-3">
                                <p>{node.excerpt}</p>
                              </Card.Text>
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
    description="A micro-magazine about data, AI, & digital sustainability." />
)

export default HomePage