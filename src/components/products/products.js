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
                    <div class="card d-flex my-3">
                        <h5 class="px-2 py-3 checkers">Content Generation</h5>
                        <StaticImage src={"../../images/graphics/content.png"} alt="A picture of the sun behind a mountain/lake landscape" />
                        <p className="mx-5 my-4 text-center capsies">Pay for content generation services that were already delivered.</p>
                        <stripe-buy-button class="align-self-center"
                            buy-button-id="buy_btn_1MutfoBAXajCpMnAPSTOiOIC"
                            publishable-key="pk_test_51Mtw0fBAXajCpMnAnb0st1vYbOEx2gzIVLeeLCZwEvbYHm6CWu86darTp1p0xneyNotmDyxApFxxL7FOsM3jrCnR00QDq9QeKo">
                        </stripe-buy-button>
                        <p class="small text-center capsies"><Link to="/terms-conditions">Terms & Conditions</Link></p>
                    </div>
                </div>

                <div class="col-12 col-lg-4 d-flex">
                    <div class="card d-flex my-3">
                        <h5 class="px-2 py-3 checkers">AI Transcription</h5>
                        <StaticImage src={"../../images/graphics/helix.png"} alt="A picture of the sun behind a mountain/lake landscape" />
                        <p className="mx-5 my-4 text-center capsies">Pay for transcription services that were already delivered.</p>
                        <stripe-buy-button class="align-self-center"
                            buy-button-id="buy_btn_1MutfoBAXajCpMnAPSTOiOIC"
                            publishable-key="pk_test_51Mtw0fBAXajCpMnAnb0st1vYbOEx2gzIVLeeLCZwEvbYHm6CWu86darTp1p0xneyNotmDyxApFxxL7FOsM3jrCnR00QDq9QeKo">
                        </stripe-buy-button>
                        <p class="small text-center capsies"><Link to="/terms-conditions">Terms & Conditions</Link></p>
                    </div>
                </div>

                <div class="col-12 col-lg-4 d-flex">
                    <div class="card d-flex my-3">
                        <h5 class="px-2 py-3 checkers">Sustainability Reporting</h5>
                        <StaticImage src={"../../images/graphics/stats.png"} alt="A picture of the sun behind a mountain/lake landscape" />
                        <p className="mx-5 my-4 text-center capsies">Pay for sustainability reporting services that were already delivered.</p>
                        <stripe-buy-button class="align-self-center"
                            buy-button-id="buy_btn_1MutfoBAXajCpMnAPSTOiOIC"
                            publishable-key="pk_test_51Mtw0fBAXajCpMnAnb0st1vYbOEx2gzIVLeeLCZwEvbYHm6CWu86darTp1p0xneyNotmDyxApFxxL7FOsM3jrCnR00QDq9QeKo">
                        </stripe-buy-button>
                        <p class="small text-center capsies"><Link to="/terms-conditions">Terms & Conditions</Link></p>
                    </div>
                </div>

                <div class="col-12 col-lg-4 d-flex">
                    <div class="card d-flex my-3">
                        <h5 class="px-2 py-3 checkers">Pay it forward!</h5>
                        <StaticImage src={"../../images/graphics/content-plus.png"} alt="A picture of the sun behind a mountain/lake landscape" />
                        <p className="mx-5 my-4 text-center capsies">(Donation) Help us produce public resources.</p>
                        <stripe-buy-button class="align-self-center"
                            buy-button-id="buy_btn_1MutfoBAXajCpMnAPSTOiOIC"
                            publishable-key="pk_test_51Mtw0fBAXajCpMnAnb0st1vYbOEx2gzIVLeeLCZwEvbYHm6CWu86darTp1p0xneyNotmDyxApFxxL7FOsM3jrCnR00QDq9QeKo">
                        </stripe-buy-button>
                        <p class="small text-center capsies"><Link to="/terms-conditions">Terms & Conditions</Link></p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default ProductsComponent