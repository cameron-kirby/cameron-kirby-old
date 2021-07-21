import React from 'react'
import styled from 'styled-components'
import { Route, Switch, Link } from 'react-router-dom'

// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHome, faBriefcase } from '@fortawesome/free-solid-svg-icons'

const homeIcon = <FontAwesomeIcon icon={faHome} />
const userIcon = <FontAwesomeIcon icon={faUser} />

const StyledNav = styled.nav`
    top: 0;
    padding: 0;
    width: 5em;
    height: 100vh;
    position: fixed;
    z-index: 5;
    background-color: var(--red);
    transition: width .35s cubic-bezier(var(--transition-main), 1);
    overflow-y: auto;
    overflow-x: hidden;
    background-color: var(--red);

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
        background: var(--black);
    }
    .navbar-logo > .navbar-item-inner {
        width: calc(5rem - 8px);
    }
    .navbar-logo > .navbar-item-inner:hover {
        background-color: transparent;
    }
    .navbar-logo > .navbar-item-inner {
        height: 2em;
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
        transition: all .2s cubic-bezier(var(--transition-main), 1);
    }
    .navbar-item-inner:hover {
        color: var(--beige);
        background: var(--black);
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

const Nav = props => {

    return(
        <StyledNav>
            <ul className="navbar-items flexbox-col">
                <li className="navbar-logo flexbox-left">
                    <Link to="/" className="navbar-item-inner flexbox-left">
                        <div className="navbar-item-inner-icon-wrapper flexbox">
                            CK
                        </div>
                    </Link>
                </li>
                <li className="navbar-item flexbox-left">
                    <Link to="/" className="navbar-item-inner flexbox-left">
                        <div className="navbar-item-inner-icon-wrapper flexbox">
                            <FontAwesomeIcon className="link-icon" icon={faHome} />
                        </div>
                        <span className="link-text">Home</span>
                    </Link>
                </li>
                <li className="navbar-item flexbox-left">
                    <Link to="/" className="navbar-item-inner flexbox-left">
                        <div className="navbar-item-inner-icon-wrapper flexbox">
                            <FontAwesomeIcon className="link-icon" icon={faUser} />
                        </div>
                        <span className="link-text">About</span>
                    </Link>
                </li>
                <li className="navbar-item flexbox-left">
                    <Link to="/" className="navbar-item-inner flexbox-left">
                        <div className="navbar-item-inner-icon-wrapper flexbox">
                            <FontAwesomeIcon className="link-icon" icon={faBriefcase} />
                        </div>
                        <span className="link-text">Work</span>
                    </Link>
                </li>
            </ul>
        </StyledNav>
    )
}

export default Nav