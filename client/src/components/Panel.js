import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import anime from 'animejs'


const StyledPanel = styled.div`
    opacity: 88%;
    position: fixed;
    top: 0;
    left: 6rem;
    margin: 1rem;
    padding: 0;
    z-index: 4;
    width: calc(100vw - 8rem);
    height: calc(100vh - 2rem);
    border-radius:20px;
    overflow-y: auto;
    overflow-x: hidden;
    // Background
    backdrop-filter: blur(20px) saturate(190%);
    -webkit-backdrop-filter: blur(20px) saturate(190%);
    background-color: rgba(255,255,255,0.2);
    border: 1px solid rgba(209,213,219, 0.3);

    .topbar {
        margin: 0 0 2em 0;
        width: 100%;
        height: 5em;
        // Background
        backdrop-filter: blur(20px) saturate(190%);
        -webkit-backdrop-filter: blur(20px) saturate(190%);
        background-color: rgba(255,255,255,0.2);
        border: 1px solid rgba(209,213,219, 0.3);

        display: flex;
        align-items: center;

        .topbar-title {
            width: 10rem;
            // Text
            font-family: 'Source Sans Pro', sans-serif;
            font-size: 2em;
            line-height: 0.9;
            font-weight: 900;
            color: var(--black);
        }
    }
`

const Panel = ({ children, transition }) => {
    const animationRef = useRef(null)
    
    // Animation effect hook
    useEffect(() => {
        if(transition === "enter"){
            animationRef.current = anime({
                targets: '.panel',
                easing: 'easeInOutExpo',
                translateX: [250,0],
                opacity: ['0%', '88%'],
                duration: 500,
            })
        } if (transition === "exit") {
            animationRef.current = anime({
                targets: '.panel',
                easing: 'easeInOutExpo',
                translateX: [0,250],
                opacity: ['88%', '0%'],
                duration: 500,
            })
        }
    }, [transition])

    return(
        <StyledPanel className="panel">
            <div className="topbar">
                <div className="topbar-title">
                    About
                </div>
            </div>
            {children}
        </StyledPanel>
    )
}

export default Panel