import React from "react"
import { Link } from 'gatsby'
import styles from "./navbar.module.css"

export default function NavBar() {
    return (
        <nav className={styles.nav}>
            <h3 id={styles.siteTitle}>Nicholas Kier</h3>
            <Link to='/'>Home</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/about'>About</Link>
            <Link to='/my-random-pic'>Get a pic!</Link>
            <Link to='/my-posts'>View Posts</Link>
        </nav>
    )
}