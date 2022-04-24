import { Link } from '@inertiajs/inertia-react'
import React from 'react'

export default function TopNavbar() {
    return (
        <header id="dtr-header-global" className="fixed-top">
            <div className="d-flex align-items-center justify-content-between">
                {/* header left starts */}
                <div className="dtr-header-left">
                    {/* logo */}
                    <a className="logo-default dtr-scroll-link" href="#home"><img src="assets/images/logo-dark.png" alt="logo" /></a>
                    {/* logo on scroll */}
                    <a className="logo-alt dtr-scroll-link" href="#home"><img src="assets/images/logo-dark.png" alt="logo" /></a>
                    {/* logo on scroll ends */}
                </div>
                {/* header left ends */}
                {/* menu starts*/}
                <div className="main-navigation">
                    <ul className="sf-menu dtr-nav dark-nav-on-load dark-nav-on-scroll">
                        <li>
                            <a className="nav-link" href="#home">
                            </a>
                        </li>


                    </ul>
                </div>
                {/* menu ends */}
                {/* header right starts */}
                <div className="main-navigation dtr-header-right">
                    <ul className="sf-menu dtr-nav dark-nav-on-load dark-nav-on-scroll">

                        <li>
                            <a className="nav-link" href="/admin/dashboard">
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <Link className="nav-link" href="/login">
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" href="/register">
                                Register
                            </Link>
                        </li>

                    </ul>
                </div>
                {/* header right ends */}
            </div>
        </header>
    )
}
