import * as React from 'react'
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'

const BenefitsComponent = () => {
    return (
        <Carousel variant="dark" className="benefits-carousel shadow pink">
            <Carousel.Item interval={2000}>
                <Card>
                    <Card.Body>Sustainability reporting</Card.Body>
                </Card>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <Card>
                    <Card.Body>Faster & more sustainable websites</Card.Body>
                </Card>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <Card>
                    <Card.Body>Sustainability content generation</Card.Body>
                </Card>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <Card>
                    <Card.Body>Sustainability transcriptions</Card.Body>
                </Card>
            </Carousel.Item>
        </Carousel>
    )
}

export default BenefitsComponent