import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import Carousel from "react-bootstrap/Carousel"
import Container from "react-bootstrap/esm/Container"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

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
                                        }
                                }
                        }
                }
        `)

        const posts = data.allMdx.nodes

        return (
                <Container fluid>
                        <Row className="services-carousel">
                                <Col className="text-end d-flex col-6 offset-3">
                                        <h3 className="pzntrk my-md-auto">Our services</h3>
                                
                                        <Carousel variant="dark my-md-auto">
                                                {
                                                        posts.map(node => (
                                                                <Carousel.Item interval={3000}>
                                                                        <article key={node.id}>
                                                                                <h3 className="small"><Link to={`/services/${node.frontmatter.slug}`}> {node.frontmatter.title} </Link></h3>
                                                                                <p className="">{node.frontmatter.intro}</p>
                                                                        </article>
                                                                </Carousel.Item>
                                                        ))
                                                }
                                        </Carousel>
                                </Col>
                        </Row>
                </Container>
        )
}

export default ServicesComponent