import React from 'react'
import styled from 'styled-components'
import CustomLink from './pieces/CustomLink'
import Wavetext from './pieces/Wavetext'
// ICONS
import { Briefcase, Envelope, HomeHeart, UserPin } from '@styled-icons/boxicons-regular'


const StyledNav = styled.nav`
    top: 0;
    margin: 1rem;
    padding: 0;
    width: 5em;
    height: calc(100vh - 2rem);
    position: fixed;
    z-index: 5;
    border-radius:20px;
    transition: width .35s cubic-bezier(var(--transition-main), 1);
    overflow-y: auto;
    overflow-x: hidden;

    backdrop-filter: blur(20px) saturate(190%);
    -webkit-backdrop-filter: blur(20px) saturate(190%);
    background-color: rgba(255,255,255,0.2);
    border: 1px solid rgba(209,213,219, 0.3);

    :hover {
        width: 16em;
    }
    /* FLEX BOX */
    .flexbox {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .flexbox-col {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    .flexbox-left {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    /* NAV-BAR */

    /* Navbar Logo */
    .navbar-logo {
        margin: 0 0 2em 0;
        width: 100%;
        height: 5em;
        // Background
        backdrop-filter: blur(20px) saturate(190%);
        -webkit-backdrop-filter: blur(20px) saturate(190%);
        background-color: rgba(255,255,255,0.2);
        border: 1px solid rgba(209,213,219, 0.3);
    }
    .navbar-logo > .navbar-item-inner {
        width: calc(5rem - 8px);
    }
    .navbar-logo > .navbar-item-inner:hover {
        background-color: transparent;
    }
    .navbar-logo > .navbar-item-inner {
        height: 4em;
        color: var(--beige);
    }
    /* Navbar Items */
    .navbar-items {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
    .navbar-item {
        padding: 0 .5em;
        width: 100%;
        cursor: pointer;
    }
    .navbar-item-inner {
        padding: 1em 0;
        width: 100%;
        position: relative;
        color: var(--black) ;
        border-radius: .25em;
        text-decoration: none;
        border: 1px solid rgba(209,213,219, 0.0);
        transition: all .2s cubic-bezier(var(--transition-main), 1);
    }
    .navbar-item-inner:hover {
        color: var(--black);
        // Background
        backdrop-filter: blur(20px) saturate(190%);
        -webkit-backdrop-filter: blur(20px) saturate(190%);
        background-color: rgba(255,255,255,0.2);
        border: 1px solid rgba(209,213,219, 0.3);
        box-shadow: 0 17px 30px -10px var(--black);
    }
    .navbar-item-inner-icon-wrapper {
        width: calc(5rem - 1em - 8px);
        position: relative;
    }
    .navbar-item-inner-icon-wrapper {
        width: calc(5rem - 1em - 8px);
        position: relative;
    }
    .navbar-item-inner-icon-wrapper .link-icon {
        position: absolute;
        font-size: calc(var(--navbar-buttons) - 1rem);
    }

    .link-text {
        margin: 0;
        width: 0;
        text-overflow: ellipsis;
        white-space: nowrap;
        transition: all .35s cubic-bezier(var(--transition-main), 1);
        overflow: hidden;
        opacity: 0;
    }
    
    :hover .link-text {
        width: calc(100% - calc(5rem - 8px));
        opacity: 1;
    }
`

const waveProps = {
    word: "CK",
    viewBoxSize: {
        x: 50,
        y: 50,
    },
    wavePath: {
        wave1: ["M 0 50 h 50 V 30 C 32 46 22 7 0 25 V 25 z", "M 0 50 h 50 V 25 C 34 14 25 47 0 30 V 30 z"],
        wave2: ["M 0 50 h 50 V 35 C 27 46 23 13 0 30 V 30 z", "M 0 50 h 50 V 34 C 33 19 25 47 0 42 V 42 z"],
    },
    waveColors: {
        background: '#384343',
        wave1: '#FE5F55',
        wave2: '#7A9E9F'
    },
    fontWeight: 900,
}

const Nav = props => {

    return(
        <StyledNav>
            <ul className="navbar-items flexbox-col">
                <li className="navbar-logo flexbox">
                    <CustomLink to="/" setTransition={props.setTransition} propClass="navbar-item-inner flexbox">
                        <div className="navbar-item-inner-icon-wrapper flexbox">
                            <Wavetext waveProps={waveProps}/>
                        </div>
                    </CustomLink>
                </li>
                <li className="navbar-item flexbox-left">
                    <CustomLink to="/" setTransition={props.setTransition} propClass="navbar-item-inner flexbox-left">
                        <div className="navbar-item-inner-icon-wrapper flexbox">
                            <HomeHeart />
                        </div>
                        <span className="link-text">Home</span>
                    </CustomLink>
                </li>
                <li className="navbar-item flexbox-left">
                    <CustomLink to="/about" setTransition={props.setTransition} propClass="navbar-item-inner flexbox-left">
                        <div className="navbar-item-inner-icon-wrapper flexbox">
                            <UserPin />
                        </div>
                        <span className="link-text">About</span>
                    </CustomLink>
                </li>
                <li className="navbar-item flexbox-left">
                    <CustomLink to="/" setTransition={props.setTransition} propClass="navbar-item-inner flexbox-left">
                        <div className="navbar-item-inner-icon-wrapper flexbox">
                            <Briefcase />
                        </div>
                        <span className="link-text">Work</span>
                    </CustomLink>
                </li>
                <li className="navbar-item flexbox-left">
                    <CustomLink to="/" setTransition={props.setTransition} propClass="navbar-item-inner flexbox-left">
                        <div className="navbar-item-inner-icon-wrapper flexbox">
                            <Envelope />
                        </div>
                        <span className="link-text">Contact</span>
                    </CustomLink>
                </li>
            </ul>
        </StyledNav>
    )
}

export default Nav