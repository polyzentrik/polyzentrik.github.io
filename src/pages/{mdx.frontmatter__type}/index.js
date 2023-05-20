import React, { useState, useEffect } from "react"
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
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

  // Infinite scroll implementation by Eric Howey (https://github.com/ehowey/loadmore-demo).
  // Can't really do better than that.

  // State for the list, state to trigger load, state to determine if there is more to load
  const [list, setList] = useState([...posts.slice(0, 10)])
  const [loadMore, setLoadMore] = useState(false)
  const [hasMore, setHasMore] = useState(posts.length > 10)

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
        ? posts.slice(currentLength, currentLength + 10)
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
  if (path === "services") {
    return (
      <Layout pageTitle={path} >
        <Row className="mb-2 hello">
          <Col lg={12}>
            <Container className="mt-5">
              <Row className="">
                {
                  posts.map(node => (
                    <Col className="col-12 col-md-6 d-flex services-index">
                      <Card className="mb-2 px-0 mx-0 checkers">
                        <article key={node.id}>
                          <Card.Title className="pt-4 pb-2 bg-white">
                            <h3 className="px-3 small"><Link to={`/services/${node.frontmatter.slug}`}> {node.frontmatter.title} </Link></h3>
                          </Card.Title>
                          <Card.Body>
                            <Card.Text>
                              <p className="pb-sm-1 pb-md-auto">{node.frontmatter.intro}</p>
                            </Card.Text>
                            <Link to={`/services/${node.frontmatter.slug}`}>
                              <Button variant="light" className="pink float-end mb-2">Learn more...</Button>
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
      </Layout>
    )
  } else {
    return (
      <Layout pageTitle={path} >
        <Container className="blog-index mt-5">
          <Row>
            <ResponsiveMasonry columnsCountBreakPoints={{ 375: 1, 767: 2, 991: 3, 1199: 4 }}>
              <Masonry>
                {
                  list.map(node => (
                    <article key={node.id} className={node.frontmatter.categories}>
                      <Card className="m-1 checkers">
                        <Link to={`/${node.frontmatter.type}/${node.frontmatter.slug}`}>
                          <GatsbyImage image={getImage(node.frontmatter.hero_image)} alt="Placeholder image" />
                        </Link>
                        <Card.Body className="px-0 pt-0">
                          <Card.Title className="pt-2 pb-3 bg-white">
                            <h3 className="px-2"><Link to={`/${node.frontmatter.type}/${node.frontmatter.slug}`}> {node.frontmatter.title}</Link></h3>
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
            <Container className="text-end">
              {hasMore ? (
                <Button onClick={handleLoadMore} variant="dark" className="border w-100 mt-3">Click to load more.</Button>
              ) : (
                <span></span>
              )}
            </Container>
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
          intro
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
export const Head = ({ location }) => (
  <Seo title={"Polyzentrik > " + location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2, -1)}
    description="Read more in our (cool and sustainable) website." />
)

export default ContentPage