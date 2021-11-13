import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import Search from './Search'
import Auth from './Auth'
import './navbar.css'

const Navbar = () => {
    return (
        <section id="NavbarBlock">
            <article>
                <Logo/>
                <Menu/>
                <Search/>
                <Auth/>
            </article>
        </section>
    )
}
export default Navbar;
