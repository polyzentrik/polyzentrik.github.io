import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import useScript from 'usescript-hook'
import Container from 'react-bootstrap/Container'

const ProductsComponent = () => {
    useScript("https://js.stripe.com/v3/buy-button.js");
    return (
        <Container className="col-10">
            <div class="row shop">
                <div class="col-12 col-lg-4 d-flex">
                    <div class="card d-flex my-3 border-dark">
                        <h5 class="px-2 py-3 checkers border-bottom border-dark">Content Generation</h5>
                        <StaticImage src={"../../images/graphics/content.png"} alt="A logo representing the idea of content generation" />
                        <p className="mx-5 my-4 text-center capsies">Pay for content generation services that were already delivered.</p>
                        <stripe-buy-button class="align-self-center"
                            buy-button-id="buy_btn_1MvniOBAXajCpMnAkcj1HXDI"
                            publishable-key="pk_live_51Mtw0fBAXajCpMnAPMu5NkmWycHeM2YDVXYQJo1NRRJwmQogqDLhaoqCUnvachQdsnQG41JWqvbYFz1PYSeGxzK700lTgl0jX5"
                        >
                        </stripe-buy-button>
                        <p class="small text-center capsies"><Link to="/terms-conditions">Terms & Conditions</Link></p>
                    </div>
                </div>

                <div class="col-12 col-lg-4 d-flex">
                    <div class="card d-flex my-3 border-dark">
                        <h5 class="px-2 py-3 checkers border-bottom border-dark">AI Transcription</h5>
                        <StaticImage src={"../../images/graphics/helix.png"} alt="A logo representing the idea of sound waves" />
                        <p className="mx-5 my-4 text-center capsies">Pay for transcription services that were already delivered.</p>
                        <stripe-buy-button class="align-self-center"
                            buy-button-id="buy_btn_1MvncfBAXajCpMnACJI2sYqD"
                            publishable-key="pk_live_51Mtw0fBAXajCpMnAPMu5NkmWycHeM2YDVXYQJo1NRRJwmQogqDLhaoqCUnvachQdsnQG41JWqvbYFz1PYSeGxzK700lTgl0jX5"
                        >
                        </stripe-buy-button>
                        <p class="small text-center capsies"><Link to="/terms-conditions">Terms & Conditions</Link></p>
                    </div>
                </div>

                <div class="col-12 col-lg-4 d-flex">
                    <div class="card d-flex my-3 border-dark">
                        <h5 class="px-2 py-3 checkers border-bottom border-dark">Sustainability Reporting</h5>
                        <StaticImage src={"../../images/graphics/stats.png"} alt="A logo representing the idea of a graph" />
                        <p className="mx-5 my-4 text-center capsies">Pay for sustainability reporting services that were already delivered.</p>
                        <stripe-buy-button class="align-self-center"
                            buy-button-id="buy_btn_1MvnlaBAXajCpMnAauS15Jnm"
                            publishable-key="pk_live_51Mtw0fBAXajCpMnAPMu5NkmWycHeM2YDVXYQJo1NRRJwmQogqDLhaoqCUnvachQdsnQG41JWqvbYFz1PYSeGxzK700lTgl0jX5"
                        >
                        </stripe-buy-button>
                        <p class="small text-center capsies"><Link to="/terms-conditions">Terms & Conditions</Link></p>
                    </div>
                </div>

                <div class="col-12 col-lg-4 d-flex">
                    <div class="card d-flex my-3 border-dark">
                        <h5 class="px-2 py-3 checkers border-bottom border-dark">Pay it forward!</h5>
                        <StaticImage src={"../../images/graphics/content-plus.png"} alt="A logo representing the idea of an explosion of colour and creativity" />
                        <p className="mx-5 my-4 text-center capsies">(Donation) Help us produce public resources.</p>
                        <stripe-buy-button class="align-self-center"
                            buy-button-id="buy_btn_1Mvnn1BAXajCpMnAe6xBzNF7"
                            publishable-key="pk_live_51Mtw0fBAXajCpMnAPMu5NkmWycHeM2YDVXYQJo1NRRJwmQogqDLhaoqCUnvachQdsnQG41JWqvbYFz1PYSeGxzK700lTgl0jX5"
                        >
                        </stripe-buy-button>
                        <p class="small text-center capsies"><Link to="/terms-conditions">Terms & Conditions</Link></p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default ProductsComponent