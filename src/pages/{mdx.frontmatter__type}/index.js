import * as React from "react"
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Seo from '../../components/seo'
import Layout from '../../components/layout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "../../components/pretty.css"

const ContentPage = ({ location, data }) => {
  const path = location.pathname.slice(1, -1)
  const posts = data.allMdx.nodes.filter(node => node.frontmatter.type === path)

  if (path === "services") {
    return (
      <Layout pageTitle={path} >
        <p className="big-p">For consumption by search engines. If you are a human and somehow arrived here, go to <Link to="/">HOME</Link> for a better description of our services.</p>
        {
          posts.map(node => (
            <article key={node.id}>
              <Link to={`/services/${node.frontmatter.slug}`}> {node.frontmatter.title} </Link>
              <p>{node.excerpt}</p>
            </article>
          ))
        }
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
                      <Card className="m-1 checkers border-dark">
                        <Link to={`/${node.frontmatter.type}/${node.frontmatter.slug}`}>
                          <GatsbyImage image={getImage(node.frontmatter.hero_image)} alt="Placeholder image" />
                        </Link>
                        <Card.Body className="px-0 pt-0">
                          <Card.Title className="pt-2 pb-3 border-top border-bottom border-dark bg-white">
                            <h3 className="px-2 small"><Link to={`/${node.frontmatter.type}/${node.frontmatter.slug}`}> {node.frontmatter.title}</Link></h3>
                          </Card.Title>
                          <Card.Text className="px-3">
                            <p>{node.excerpt}</p>
                          </Card.Text>
                          <Link to={`/${node.frontmatter.type}/${node.frontmatter.slug}`}>
                            <Button variant="info" className="special-bg pink float-end mb-3 border border-dark mx-3">Read more...</Button>
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
export const Head = ({ location }) => (
  <Seo title={"Polyzentrik > " + location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2, -1)}
    description="Learn more about us and our services." />
)

export default ContentPage