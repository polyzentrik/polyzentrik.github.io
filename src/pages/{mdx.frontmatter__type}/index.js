import * as React from "react"
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage} from 'gatsby-plugin-image'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Seo from '../../components/seo'
import Layout from '../../components/layout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "../../components/pretty.css"

const ContentPage = ({ location, data }) => {
  const path = location.pathname.slice(1, -1)
  const posts = data.allMdx.nodes.filter(node => node.frontmatter.type === path)

  if (path === "services") {
    return (
      <Layout pageTitle={path} >
        <p className="big-p">A range of services that make sense independently or combined.</p>
      <Container>
        <Row className="services-index">
          {
            posts.map(node => (
              <Col md={12} lg={6} className="intercalao d-flex">
                <Card className="mt-2 mb-2 flex-fill">
                  <article key={node.id}>
                    <Link to={`/services/${node.frontmatter.slug}`}>
                      <GatsbyImage image={getImage(node.frontmatter.hero_image)} alt="Placeholder image" />
                    </Link>
                    <Card.Body>
                      <Card.Title>
                        <Link to={`/services/${node.frontmatter.slug}`}> {node.frontmatter.title} </Link>
                      </Card.Title>
                      <Card.Text>
                        <p className="pb-sm-1 pb-md-auto">{node.excerpt}</p>
                      </Card.Text>
                      <Link to={`/services/${node.frontmatter.slug}`}>
                        <Button variant="info" className="checkers float-end mb-3 border border-2">Learn more...</Button>
                      </Link>
                    </Card.Body>
                  </article>
                </Card>
              </Col>
            ))
          }
        </Row>
      </Container>
      </Layout>
    )
  } else {
    return (
      <Layout pageTitle={path} >
        <p className="big-p">Thoughts on digital sustainability.</p>
        <Container className="blog-index">
          <Row>
            <ResponsiveMasonry columnsCountBreakPoints={{ 375: 1, 767: 2, 991: 3, 1199: 4, 1399: 5 }}>
              <Masonry>
                {
                  posts.map(node => (
                    <article key={node.id}>
                      <Card className="m-1">
                        <Link to={`/${node.frontmatter.type}/${node.frontmatter.slug}`}>
                          <GatsbyImage image={getImage(node.frontmatter.hero_image)} alt="Placeholder image" />
                        </Link>
                        <Card.Body>
                          <Card.Title>
                            <Link to={`/${node.frontmatter.type}/${node.frontmatter.slug}`}> {node.frontmatter.title} </Link>
                          </Card.Title>
                          <Card.Text>
                            <p>{node.excerpt}</p>
                          </Card.Text>
                          <Link to={`/${node.frontmatter.type}/${node.frontmatter.slug}`}>
                            <Button variant="info" className="checkers float-end mb-3 border border-2">Read more...</Button>
                          </Link>
                        </Card.Body>
                      </Card>
                    </article>
                  ))
                }
              </Masonry>
            </ResponsiveMasonry>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    allMdx(sort: {frontmatter: {date: DESC}}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          type
          slug
          author
          hero_image {
            childImageSharp {
              gatsbyImageData  (
                layout: CONSTRAINED
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
export const Head = ( {location} ) => (
  <Seo title={"Polyzentrik > " + location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2, -1)}
    description="Learn more about us and our services." />
)

export default ContentPage