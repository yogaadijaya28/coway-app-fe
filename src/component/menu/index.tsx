import Link from 'next/link'
import React from 'react'

export default function MenuComponent() {

    return (
        <>
            <header id="header" className="header d-flex align-items-center fixed-top">
                <div className="container-fluid container-xl position-relative d-flex align-items-center">
                    <a href="index.html" className="logo d-flex align-items-center me-auto">
                        <img src="assets/img/logo.png" alt="" />
                       
                    </a>
                    <nav id="navmenu" className="navmenu">
                        <ul>
                            <li><a href="index.html#hero" className="active">Home</a></li>
                            <li><a href="index.html#about">About</a></li>
                            <li><a href="index.html#features">Features</a></li>
                            <li><a href="index.html#services">Services</a></li>
                            <li><a href="index.html#pricing">Pricing</a></li>
                            <li className="dropdown"><a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                                <ul>
                                    <li><a href="#">Dropdown 1</a></li>
                                    <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                                        <ul>
                                            <li><a href="#">Deep Dropdown 1</a></li>
                                            <li><a href="#">Deep Dropdown 2</a></li>
                                            <li><a href="#">Deep Dropdown 3</a></li>
                                            <li><a href="#">Deep Dropdown 4</a></li>
                                            <li><a href="#">Deep Dropdown 5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Dropdown 2</a></li>
                                    <li><a href="#">Dropdown 3</a></li>
                                    <li><a href="#">Dropdown 4</a></li>
                                </ul>
                            </li>
                            <li><a href="index.html#contact">Contact</a></li>
                        </ul>
                        <i className="mobile-nav-toggle d-xl-none bi bi-list" />
                    </nav>
                    {/* <a className="btn-getstarted" href="index.html#about">Get Started</a> */}
                </div>
            </header>


        </>
    )
}
