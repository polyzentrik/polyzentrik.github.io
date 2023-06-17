import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import Container from 'react-bootstrap/Container'
import '../components/pretty.css'

const TopperComponent = () => {
    const data = useStaticQuery
        (graphql`query {
        site {
        siteMetadata {
            title,
            description
                }
            }
        }
    `)

    return (
            <Container className="topper">
                <h1 className="pzntrk float-end">{data.site.siteMetadata.title}</h1>
                <ul className="pink float-end pb-2">
                    <li>
                        <a href="https://www.linkedin.com/company/polyzentrik/" target="_blank" rel="noopener noreferrer">
                            <BsLinkedin title="LinkedIn" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/polyzentrik" target="_blank" rel="noopener noreferrer">
                            <BsGithub title="GitHub" />
                        </a>
                    </li>
                </ul>
            </Container>
    )
}

export default TopperComponent