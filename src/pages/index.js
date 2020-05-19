import React from "react"
import { Link } from "gatsby"
import "../styles/styles.scss"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/main.css"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <div className="container mx-auto my-8 main-screen bg-gray-900 slide-main">
      <h1>The Joy of creating art with code.</h1>
      <pre>
        <code>
          Neeraj Pandey.
        </code>
      </pre>
    </div>
  </Layout>
)

export default IndexPage
