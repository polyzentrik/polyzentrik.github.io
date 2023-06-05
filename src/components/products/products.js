import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Container from 'react-bootstrap/Container'

const ProductsComponent = () => {
    return (
        <Container className="mt-5">
            <p className="big-p">Online payments gateway<sup>1, 2</sup> for <span className="text-decoration-underline">existing</span><sup>3, 4</sup> users and supporters.</p>
            <div class="row shop d-flex">
                <div class="col-12 col-lg-6 my-1">
                    <div class="card d-flex">
                        <h3 class="px-2 py-3 checkers card-title pzntrk small">Pay for services</h3>
                        <StaticImage src={"../../images/graphics/analytics-plus.png"} alt="A logo representing the idea of a neural network" />
                        <p className="mx-5 my-4 text-center capsies">Pay for services that were already delivered.</p>
                        <a href="https://buy.stripe.com/eVa16F6XJ6XB8PS4gk" target="_blank" rel="noreferrer noopener" class="btn checkers btn-lg border col-10 offset-1" role="button">Pay</a>
                        <p class="small text-center capsies"><Link to="/terms-conditions">Terms & Conditions</Link></p>
                    </div>
               </div>

                <div class="col-12 col-lg-6 my-1">
                    <div class="card d-flex">
                        <h3 class="px-2 py-3 checkers card-title pzntrk small">Pay it forward</h3>
                        <StaticImage src={"../../images/graphics/dev-plus.png"} alt="A logo representing the idea of an explosion of colour and creativity" />
                        <p className="mx-5 my-4 text-center capsies">Help us produce public resources.</p>
                        <a href="https://buy.stripe.com/28o16Fci381F7LOeUX" target="_blank" rel="noreferrer noopener" class="btn checkers btn-lg border col-10 offset-1" role="button">Pay</a>
                        <p class="small text-center capsies"><Link to="/terms-conditions">Terms & Conditions</Link></p>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <p className="small my-0 capsies">1. By using the payment options in this page you accept the applicable sections of our <Link to="/terms-conditions">Terms & Conditions</Link>.</p>
            <p className="small my-0 capsies">2. Payments are handled via a third-party (<a href="https://stripe.com" target="_blank" rel="noreferrer noopener">Stripe</a>). You will be redirected to their site after clicking the button.</p>
            <p className="small my-0 capsies">3. Payments are final and confirm satisfaction/acceptance with/of services received and/or terms of service already agreed.</p>
            <p className="small my-0 capsies">4. Do NOT use this page to book services. You will incur fees that are non-refundable and we cannot guarantee availability.</p>
        </Container>
    )
}

export default ProductsComponent