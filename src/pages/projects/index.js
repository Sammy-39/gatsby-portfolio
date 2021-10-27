import { graphql, Link } from 'gatsby'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import React from 'react'

import Layout from '../../components/Layout'
import {portfolio, projectsCon} from '../../styles/project.module.css'

const Projects = ({data}) =>{
    
    const projects = data.allMarkdownRemark.nodes
    const contact = data.site.siteMetadata.contact

    return(
        <Layout>
            <div className={portfolio}>
                <h2> Portfolio </h2>
                <h3> Projects & Websites I've created </h3>
                <div className={projectsCon}>
                    {projects.map((project)=>(
                        <Link to={`/projects/${project.frontmatter.slug}`} key={project.id}> 
                            <div>
                                <GatsbyImage image={getImage(project.frontmatter.thumb)} alt={project.frontmatter.title}/>
                                <h3> {project.frontmatter.title} </h3>
                                <p> {project.frontmatter.stack} </p>
                            </div>
                        </Link>
                    ))}
                </div>
                <p> Like what you see? Email at {contact} </p>
            </div>
        </Layout>
    )
}

export default Projects

// export page query
export const query = graphql`
    query ProjectsPage {
        allMarkdownRemark(sort: {fields: frontmatter___title, order: DESC}) {
            nodes {
              frontmatter {
                slug
                stack
                title
                thumb {
                    childImageSharp {
                        gatsbyImageData(placeholder: BLURRED)
                    }
                } 
              }
              id
            }
        }
        site {
            siteMetadata {
                contact
            }
        }
    }
`