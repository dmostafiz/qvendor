import React, { useEffect } from 'react'
import TopNavbar from '../HomeComponents/TopNavbar';
import { Link, usePage } from '@inertiajs/inertia-react';

export default function HomeLayout({ auth, children }) {
    const { flash } = usePage().props
    useEffect(() => {
        console.log('Current Auth: ', auth)
    }, [])
    return (
        <>
            {/* <div id="ac-wrapper">
                <div id="popup">
                    <div className="popup-content">
                        <div className="popup-body">
                            <iframe width="90%" id="video1Src" height={400} src="https://www.youtube.com/embed/rqJyDu8LgP8" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                        </div>
                        <div className="popup-close">
                            <a href="#" onclick="PopUp('hide')"><b className="fa fa-times" aria-hidden="true">X</b></a>
                        </div>
                    </div>
                </div>
            </div> */}


            <div id="dtr-wrapper" className="clearfix">

                <div className="dtr-responsive-header header-with-slick-menu fixed-top">
                    <div className="container">
                        {/* small devices logo */}
                        <div className="dtr-responsive-header-left">
                            <Link className="dtr-logo" href="/">
                                <img width="120px" src="/assets/images/logo-dark.png" alt="logo" />
                            </Link>
                        </div>
                        {/* small devices logo ends */}
                        {/* menu button */}
                        <button id="dtr-menu-button" className="dtr-hamburger" type="button"><span className="dtr-hamburger-lines-wrapper"><span className="dtr-hamburger-lines" /></span></button>
                    </div>
                    <div className="dtr-responsive-header-menu" />
                </div>

                <TopNavbar />

                <div id="dtr-main-content">

                    <div style={{
                        maxWidth: '1000px',
                        paddingLeft: "20px",
                        paddingRight: "20px",
                        marginLeft: "auto",
                        marginRight: "auto",
                        position: "relative",
                        top: '180px',
                        zIndex: 999
                    }}>
                        {flash.error && <div className="alert alert-danger" role="alert" >
                            {flash.error}
                        </div>}
                        
                    </div>

                    {children}

                    <section id="contact" className="dtr-section dtr-section-with-bg dtr-py-100" style={{ backgroundImage: 'url(assets/images/bg-img.jpg)' }}>
                        <div className="container">
                            {/*== row starts ==*/}
                            <div className="row">
                                <div className="col-12 text-center">
                                    <h2 className="color-white">Need More Information<br />
                                        From Inertia layout</h2>
                                    <p className="color-white-muted">There has NEVER been a better time to start a business from
                                        home than right now!.<br />
                                        No franchise fees, or warehouses, no large purchases of inventory, no special equipment,
                                        and no experience needed.<br />
                                        $20 (plus shipping) could change your life. Earn the income that you deserve. Work the
                                        hours that you want.</p>
                                </div>
                            </div>
                            {/*== row ends ==*/}
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
