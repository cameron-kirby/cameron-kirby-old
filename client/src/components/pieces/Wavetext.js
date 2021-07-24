import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import anime from 'animejs'

const StyledWavetext = styled.div`
    svg {
        width: 100%;
    }

    .filled-text {
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 2em;
        line-height: 0.9;
        font-weight: 900;
    }

    #textClip text {
        display: inline;
    }

`

/* SVG Path editor: https://yqnn.github.io/svg-path-editor/ */
/*
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
        background: '#EEF5DB',
        wave1: '#FE5F55',
        wave2: '#7A9E9F'
    },
    fontWeight: 900,
}
*/

const Wavetext = props => {
    const { waveProps } = props
    const wave1AnimationRef = useRef(null)
    const wave2AnimationRef = useRef(null)

    // Animation effect hook
    useEffect(() => {
        // First wave animation reference
        wave1AnimationRef.current = anime({
            targets: "#textwave1",
            d: waveProps.wavePath.wave1[1],
            easing: 'easeInOutQuad',
            duration: 5000,
            loop: true,  
            direction: 'alternate'
        })
        // Second wave animation reference
        wave2AnimationRef.current = anime({
            targets: "#textwave2",
            d: waveProps.wavePath.wave2[1],
            easing: 'easeInOutQuad',
            duration: 5000,
            loop: true,  
            direction: 'alternate'
        })
    })

    return(
        <StyledWavetext>
            <svg viewBox={`0 0 ${waveProps.viewBoxSize.x} ${waveProps.viewBoxSize.y}`} preserveAspectRatio="none">
                <clipPath id="waveTextClip" className="filled-text" >
                    <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle">{waveProps.word}</text>
                </clipPath>

                <g id="textwaves" clipPath="url(#waveTextClip)">
                    <rect id="rectangle" fill={waveProps.waveColors.background} width={waveProps.viewBoxSize.x} height={waveProps.viewBoxSize.y} />
                    <path id="textwave1" fill={waveProps.waveColors.wave1} d={waveProps.wavePath.wave1[0]}/>
                    <path id="textwave2" fill={waveProps.waveColors.wave2} d={waveProps.wavePath.wave2[0]}/>
                </g>
            </svg>
        </StyledWavetext>
    )
}

export default Wavetext