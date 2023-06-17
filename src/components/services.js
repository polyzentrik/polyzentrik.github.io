import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Container from "react-bootstrap/esm/Container"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ServicesComponent = () => {
    const data = useStaticQuery(graphql`query {
                allMdx(
                        sort: {frontmatter: {rank: DESC}}
                        filter: {frontmatter: {type: {eq: "services"}}}) 
                        {
                                nodes {
                                        id
                                        frontmatter {
                                                title
                                                type
                                                slug
                                                rank
                                                intro
                                                hero_image {
                                                        childImageSharp {
                                                                gatsbyImageData  (
                                                                        layout: FULL_WIDTH
                                                                )
                                                        }
                                                }
                                        }
                                }
                        }
                }
        `)

    const posts = data.allMdx.nodes

    return (
        <Container fluid className="home-bar shadow">
            <Row>
                <Col className="col-lg-8 offset-lg-2">
                    <Container>
                        <span data-sal="slide-up" data-sal-delay="400" data-sal-easing="ease">
                        <h3 className="my-md-auto pzntrk">Services</h3>
                        <p className="word-breakie">We can help you <em>be more sustainable</em> in your digital activities. We can also help you <em>analyse</em>, <em>communicate</em>, and <em>manage</em> sustainability.</p>
                        </span>
                        <Row className="text-center d-flex">
                            {
                                posts.map(node => (
                                    <Col className="my-1 col-10 offset-1 offset-md-0 col-md-4 col-xl-3" data-sal="slide-up" data-sal-delay="400" data-sal-easing="ease">
                                        <Card variant="top" className="h-100">
                                            <article key={node.id}>
                                                <Link to={`/${node.frontmatter.type}/${node.frontmatter.slug}`}>
                                                    <GatsbyImage image={getImage(node.frontmatter.hero_image)} alt="Placeholder image" data-sal="zoom-out" data-sal-delay="400" data-sal-easing="ease" />
                                                </Link>
                                                <Card.Body>
                                                    <Card.Title data-sal="zoom-out" data-sal-delay="400" data-sal-easing="ease">
                                                        <h4 className="small">
                                                            <Link to={`/services/${node.frontmatter.slug}`}>
                                                                {node.frontmatter.title}
                                                            </Link></h4>
                                                    </Card.Title>
                                                    <Card.Text>
                                                    </Card.Text>
                                                </Card.Body>
                                            </article>
                                        </Card>
                                    </Col>
                                ))
                            }
                        </Row>
                        <Link to={`/services/`}>
                            <Button variant="dark" className="big-p border float-end mt-2" data-sal="zoom-out" data-sal-delay="400" data-sal-easing="ease">Go to services</Button>
                        </Link>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}





export default ServicesComponent