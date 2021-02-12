import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
        <br></br>
        <Header headerText="Well, hello there!"/>
        Hello, friend
    </Layout>

  )
}


// any js or jsx files in this directory will correspond with browser views
// each is a react component to make a page

//  we use the link component vs an "A" tag to only refresh the component and not the entire page 