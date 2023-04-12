import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Container from 'react-bootstrap/Container'

const ProductsComponent = () => {
    return (
        <Container className="col-10">
            <div class="row shop">
                <div class="col-12 col-lg-6 d-flex">
                    <div class="card d-flex my-3 border-dark">
                        <h5 class="px-2 py-3 checkers border-bottom border-dark">Pay for services</h5>
                        <StaticImage src={"../../images/graphics/analytics-plus.png"} alt="A logo representing the idea of a neural network" />
                        <p className="mx-5 my-4 text-center capsies">Pay for services that were already delivered.</p>
                        <a href="https://buy.stripe.com/eVa16F6XJ6XB8PS4gk" target="_blank" rel="noreferrer noopener" class="btn checkers btn-lg border border-dark col-10 offset-1" role="button">Pay</a>
                        <p class="small text-center capsies"><Link to="/terms-conditions">Terms & Conditions</Link></p>
                    </div>
                </div>

                <div class="col-12 col-lg-6 d-flex">
                    <div class="card d-flex my-3 border-dark">
                        <h5 class="px-2 py-3 checkers border-bottom border-dark">Pay it forward</h5>
                        <StaticImage src={"../../images/graphics/content-plus.png"} alt="A logo representing the idea of an explosion of colour and creativity" />
                        <p className="mx-5 my-4 text-center capsies">(Donation) Help us produce public resources.</p>
                        <a href="https://buy.stripe.com/28o16Fci381F7LOeUX" target="_blank" rel="noreferrer noopener" class="btn checkers btn-lg border border-dark col-10 offset-1" role="button">Donate</a>
                        <p class="small text-center capsies"><Link to="/terms-conditions">Terms & Conditions</Link></p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default ProductsComponent