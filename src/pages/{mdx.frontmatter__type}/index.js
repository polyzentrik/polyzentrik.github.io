import React, { useState, useEffect } from "react"
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import MissionComponent from "../../components/mission"
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
                <MissionComponent />
                <Row className="mb-2 hello shadow my-5 py-5">
                    <Col lg={12}>
                        <Container className="mt-5">
                            <Row className="">
                                {
                                    posts.map(node => (
                                        <Col className="col-12 col-md-6 d-flex services-index" data-sal="slide-up" data-sal-delay="400" data-sal-easing="ease">
                                            <Card className="m-1 shadow">
                                                <article key={node.id}>
                                                    <Card.Title className="pt-4 pb-2">
                                                        <h3 className="px-2 small"><Link to={`/services/${node.frontmatter.slug}`}> {node.frontmatter.title} </Link></h3>
                                                    </Card.Title>
                                                    <Card.Body className="p-3 checkers">
                                                        <Card.Text>
                                                            <p>{node.frontmatter.intro}</p>
                                                        </Card.Text>
                                                        <Link to={`/services/${node.frontmatter.slug}`}>
                                                            <Button variant="light" className="pink float-end mb-3 border mx-3">Learn more...</Button>
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
                <MissionComponent />
                <Container fluid className="blog-index">
                    <Row className="shadow my-5 py-5" data-sal="slide-up" data-sal-delay="400" data-sal-easing="ease">
                        <Col className="col-10 offset-1 py-5">
                            <ResponsiveMasonry columnsCountBreakPoints={{ 375: 1, 767: 2, 991: 3, 1199: 4, 1399: 5 }}>
                                <Masonry>
                                    {
                                        list.map(node => (
                                            <Card className="m-1 shadow">
                                            <article key={node.id} className={node.frontmatter.categories}>
                                                    <Link to={`/${node.frontmatter.type}/${node.frontmatter.slug}`}>
                                                        <GatsbyImage image={getImage(node.frontmatter.hero_image)} alt="Placeholder image" />
                                                    </Link>
                                                    <Card.Body className="p-0">
                                                        <Card.Title className="p-2">
                                                            <h3 className="px-2 small"><Link to={`/${node.frontmatter.type}/${node.frontmatter.slug}`}> {node.frontmatter.title}</Link></h3>
                                                        </Card.Title>
                                                        <Card.Text className="p-3 checkers">
                                                            <p>{node.excerpt}</p>
                                                        </Card.Text>
                                                        <Link to={`/${node.frontmatter.type}/${node.frontmatter.slug}`}>
                                                            <Button variant="light" className="pink float-end mb-3 border mx-3">Read more...</Button>
                                                        </Link>
                                                    </Card.Body>
                                                
                                            </article>
                                            </Card>
                                        ))
                                    }
                                </Masonry>
                            </ResponsiveMasonry>
                        </Col>
                    </Row>
                    <Container className="text-center">
                        {hasMore ? (
                            <Button onClick={handleLoadMore} variant="dark" className="big-p border w-75 mt-3">Click to load more.</Button>
                        ) : (
                            <span></span>
                        )}
                    </Container>

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
        description="Read more in our website." />
)

export default ContentPage