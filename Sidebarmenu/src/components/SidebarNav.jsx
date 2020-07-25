import React, { useRef, useEffect } from "react";
import { Link, withRouter } from 'react-router-dom';

import gsap from "gsap";

const SidebarNav = props => {
    const {menuState, setMenuState } = props;
    let sidebarMenu = useRef(null);
    let sidebarMenuOverlay = useRef(null);
    let menuLayer = useRef(null);
    let menuTimeLine = useRef();

    useEffect(() => {
        menuTimeLine.current = gsap.timeline({ paused: true});
        menuTimeLine.current.fromTo([sidebarMenuOverlay, menuLayer, sidebarMenu],{
            duration:0,
            x: "-100%"
        },{
            duration:0.75,
            x:"0%",
            ease:"power3.in0ut",
            stagger:{
                amount: 0.5
            }
        })
    }, []);

    useEffect(() => {
        menuState ? menuTimeLine.current.play() : menuTimeLine.current.reverse()
    }, [menuState])

    useEffect(() => {
        const { history } = props;
        history.listen(() => setMenuState(false));
    })

    return (
    <div 
    className="sidebarNavigationOverlay" 
    ref={el => (sidebarMenuOverlay = el)}
    onClick={() => setMenuState(false)}
    >
        <div className="menu-wrapper">
            <div className="menu-layer" ref={el => (menuLayer = el)}>

            </div>
            <nav className="sidebarNavigation" ref={el => (sidebarMenu = el)}>
                <div className="sedebar-top">
                    <div className="links-wrapper">
                        <Link className="menu-link" to="/">
                            Home
                        </Link>
                        <Link className="menu-link" to="/about">
                            About
                        </Link>
                        <Link className="menu-link" to="/services">
                            Services
                        </Link>
                        <Link className="menu-link" to="/gallery">
                            Gallery
                        </Link>
                        <Link className="menu-link" to="/contact">
                            Contact
                        </Link>
                    </div>
                </div>
                <div className="sidebar-bottom">

                </div>
            </nav>
        </div>
    </div>
    );
};

export default withRouter(SidebarNav);