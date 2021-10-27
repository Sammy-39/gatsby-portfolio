import {Link} from "gatsby"
import React from "react"
import {StaticImage} from 'gatsby-plugin-image'

import Layout  from "../components/Layout"
import {header, btn} from "../styles/home.module.css"

const Home = ({data}) => {
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2> Design </h2>
          <h3> Develop & Deploy </h3>
          <p> UX designer @ web developer </p>
          <Link className={btn} to='/projects'> My Portfolio Projects </Link>
        </div>
        <StaticImage src='../images/banner.png' alt="site banner" />
      </section>
    </Layout>
  )
}

export default Home
