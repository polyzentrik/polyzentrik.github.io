import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
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
                <Container fluid className="py-5 m-0 services-intro shadow special-bg">
                        <Row>
                                <Col className="col-lg-6 offset-lg-3">
                                        <Container>
                                                <h3 className="my-md-auto pzntrk">Our services</h3>
                                                <p className="big-p"><p>We can help you <em>be more sustainable</em>. We can also help you <em>analyse</em>, <em>communicate</em>, and <em>manage</em> sustainability.</p> 
                                                </p>

                                                <Row className="my-md-auto text-center">
                                                        {
                                                                posts.map(node => (
                                                                        <Col className="d-flex services-index">
                                                                                <Card className="p-4 my-1 md-auto w-100 shadow">
                                                                                        <article key={node.id}>
                                                                                                <Card.Title className="my-md-auto">
                                                                                                        <h3 className="small">
                                                                                                                <Link to={`/services/${node.frontmatter.slug}`}>
                                                                                                                        {node.frontmatter.title}
                                                                                                                </Link></h3>
                                                                                                </Card.Title>
                                                                                        </article>
                                                                                </Card>
                                                                        </Col>
                                                                ))
                                                        }
                                                </Row>
                                                <Link to={`/services/`}>
                                                        <Button variant="dark" className="big-p border float-end mt-2">Go to services</Button>
                                                </Link>
                                        </Container>
                                </Col>
                        </Row>
                </Container>
        )
}





export default ServicesComponent