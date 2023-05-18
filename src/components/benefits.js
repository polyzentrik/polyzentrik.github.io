import * as React from "react"
import { Link } from 'gatsby'
import Carousel from "react-bootstrap/Carousel"
import Container from "react-bootstrap/esm/Container"

const BenefitsComponent = () => {
        return (
                <Container fluid className="px-0 mx-0">
                        <Carousel variant="dark" className="benefits-carousel shadow">
                                <Carousel.Item interval={3000}>
                                        <p><Link to="/services/sustainability-reporting/">Sustainability reporting</Link></p>
                                </Carousel.Item>
                                <Carousel.Item interval={3000}>
                                        <p><Link to="/services/web-development/">Sustainable website development</Link></p>
                                </Carousel.Item>
                                <Carousel.Item interval={3000}>
                                        <p><Link to="/services/sustainability-transcriptions-ai/">Sustainability transcriptions (AI)</Link></p>
                                </Carousel.Item>
                                <Carousel.Item interval={3000}>
                                        <p><Link to="/services/sustainability-content-ai/">Sustainability content generation</Link></p>
                                </Carousel.Item>
                        </Carousel>
                </Container>
        )
}

export default BenefitsComponent