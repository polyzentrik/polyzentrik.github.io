import * as React from "react"
import Carousel from "react-bootstrap/Carousel"

const BenefitsComponent = () => {
    return (
        <Carousel variant="dark" className="benefits-carousel shadow pink">
            <Carousel.Item interval={2000}>
                    <p>Sustainability reporting</p>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                    <p>Sustainable websites</p>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                    <p>Sustainability content</p>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                    <p>Sustainability transcriptions</p>
            </Carousel.Item>
        </Carousel>
    )
}

export default BenefitsComponent