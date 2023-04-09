import * as React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import ProductsComponent from "../components/products/products"


const GatewayPage = () => {
    return (
        <Layout pageTitle="Online payments gateway">
            <p className="big-p">Online payments gateway<sup>1, 2</sup> for <span className="text-decoration-underline">existing</span><sup>3, 4</sup> users and supporters.</p>
            <ProductsComponent />
            <br />
            <br />
            <p className="small my-0 capsies">1. By using the payment options in this page you accept the applicable sections of our <Link to="/terms-conditions">Terms & Conditions</Link>.</p>
            <p className="small my-0 capsies">2. Payments are handled via a third-party (<a href="https://stripe.com" target="_blank" rel="noreferrer noopener">Stripe</a>). You will be redirected to their site after clicking the button.</p>
            <p className="small my-0 capsies">3. Payments are final and confirm satisfaction/acceptance with/of services received and/or terms of service already agreed.</p>
            <p className="small my-0 capsies">4. Do NOT use this page to book services. You will incur fees that are non-refundable and we cannot guarantee availability.</p>
        </Layout >
    )
}

export const Head = () => (
    <Seo title="Polyzentrik > Gateway"
        description="Online payments gateway." />
)

export default GatewayPage