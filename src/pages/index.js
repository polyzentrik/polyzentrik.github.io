import React, { useState, useEffect } from "react"
import { Link, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Layout from '../components/layout'
import Seo from '../components/seo'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "../components/pretty.css"

const HomePage = ({ data }) => {
  const posts = data.allMdx.nodes.filter(node => node.frontmatter.type === "blog")

  // Infinite scroll implementation by Eric Howey (https://github.com/ehowey/loadmore-demo).
  // Can't really do better than that.

  // State for the list, state to trigger load, state to determine if there is more to load
  const [list, setList] = useState([...posts.slice(0, 6)])
  const [loadMore, setLoadMore] = useState(false)
  const [hasMore, setHasMore] = useState(posts.length > 6)

  // Load more button click
  const handleLoadMore = () => {
    setLoadMore(true)
  }

  // Handle loading more articles
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length
      const isMore = currentLength < posts.length
      const nextResults = isMore
        ? posts.slice(currentLength, currentLength + 6)
        : []
      setList([...list, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore]) //eslint-disable-line

  //Check if there is more
  useEffect(() => {
    const isMore = list.length < posts.length
    setHasMore(isMore)
  }, [list]) //eslint-disable-line


  // Now do the posts
  return (
    <Layout pageTitle="Welcome">
      <p className="big-p">Let's talk about digital sustainability. Here's the latest from our blog...</p>
      <Row className="mb-2 hello">
        <Col lg={3} className="hidey-lg">
          <Card className="border-1">
            <StaticImage src={"../images/graphics/flexibility.jpg"} alt="A close-up picture of follage" />
          </Card>
        </Col>
        <Col lg={9} className="homepage blog-index">
          <Container>
          <ResponsiveMasonry columnsCountBreakPoints={{ 375: 1, 767: 2, 991: 3}}>
              <Masonry>
                {
                  list.map(node => (
                    <article key={node.id}>
                      <Card className="m-1 checkers border">
                        <Card.Body className="px-0 pt-0">
                          <Card.Title className="pt-3 border-bottom bg-white">
                            <h4 className="px-2"><Link to={`/${node.frontmatter.type}/${node.frontmatter.slug}`}> {node.frontmatter.title}</Link></h4>
                          </Card.Title>
                          <Card.Text className="px-3">
                            <p>{node.excerpt}</p>
                          </Card.Text>
                          
                        </Card.Body>
                      </Card>
                    </article>
                  ))
                }
              </Masonry>
            </ResponsiveMasonry>
          </Container>
          <Container className="text-end">
              {hasMore ? (
                <Button onClick={handleLoadMore} variant="dark" className="big-p border border-dark w-50 mt-3">Click to load more.</Button>
              ) : (
                <span></span>
              )}
            </Container>
        </Col>
      </Row>

    </Layout >
  )
}

export const query = graphql`
query {
  allMdx(
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {type: {eq: "blog"}}}
    ) 
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
    description="Digital solutions to help you at different stages of your sustainability journey." />
)

export default HomePage