import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import anime from 'animejs'

// SVG
import {ReactComponent as Blob1} from '../svg/blobs/blob1.svg';
import {ReactComponent as Blob2} from '../svg/blobs/blob2.svg';

// ANIME
let animeProps = {
    easing: 'easeInOutBack',
    duration: 400,
    loop: true,  
    direction: 'alternate'
}

let keyframes = {
    offset: '-=300',
    delayTime: 1000,
    wave1: {
        neutral: "M0 -459.7C36.8 -432.6 73.5 -405.5 102.2 -381.5C130.9 -357.5 151.6 -336.6 192.5 -333.4C233.4 -330.2 294.5 -344.7 325.1 -325.1C355.7 -305.5 355.7 -251.8 366.3 -211.5C376.9 -171.2 398 -144.3 415.3 -111.3C432.7 -78.3 446.2 -39.1 459.7 0L0 0Z",
        0: "M0 -459.7C40.4 -455.5 80.7 -451.2 118 -440.5C155.3 -429.7 189.5 -412.5 228.5 -395.8C267.5 -379 311.3 -362.8 325.1 -325.1C338.8 -287.3 322.6 -228.1 327.4 -189C332.1 -149.9 357.9 -130.9 383.5 -102.8C409 -74.6 434.4 -37.3 459.7 0L0 0Z"
    },
    wave2: {
        0: "M0 -367.8C32.3 -364.4 64.6 -361 94.4 -352.4C124.2 -343.8 151.6 -330 182.8 -316.6C214 -303.2 249 -290.2 260 -260C271.1 -229.9 258.1 -182.5 261.9 -151.2C265.7 -119.9 286.3 -104.7 306.8 -82.2C327.2 -59.7 347.5 -29.8 367.8 0L0 0Z"
    },
    wave3: {
        0: "M0 -275.8C24.2 -273.3 48.4 -270.7 70.8 -264.3C93.2 -257.8 113.7 -247.5 137.1 -237.5C160.5 -227.4 186.8 -217.7 195 -195C203.3 -172.4 193.6 -136.9 196.4 -113.4C199.3 -89.9 214.7 -78.5 230.1 -61.7C245.4 -44.8 260.6 -22.4 275.8 0L0 0Z"
    },
    wave4: {
        0: "M0 -183.9C16.1 -182.2 32.3 -180.5 47.2 -176.2C62.1 -171.9 75.8 -165 91.4 -158.3C107 -151.6 124.5 -145.1 130 -130C135.5 -114.9 129 -91.2 130.9 -75.6C132.9 -60 143.2 -52.4 153.4 -41.1C163.6 -29.8 173.7 -14.9 183.9 0L0 0Z"
    },
    wave5: {
        0: "M0 -91.9C8.1 -91.1 16.1 -90.2 23.6 -88.1C31.1 -85.9 37.9 -82.5 45.7 -79.2C53.5 -75.8 62.3 -72.6 65 -65C67.8 -57.5 64.5 -45.6 65.5 -37.8C66.4 -30 71.6 -26.2 76.7 -20.6C81.8 -14.9 86.9 -7.5 91.9 0L0 0Z"
    },
    wave6: {
        neutral: "M0 459.7C-36.2 438.7 -72.4 417.6 -108.4 404.7C-144.5 391.8 -180.4 387.1 -215 372.4C-249.6 357.7 -283 333 -301.2 301.2C-319.5 269.5 -322.6 230.6 -348.1 201C-373.7 171.4 -421.7 150.9 -444 119C-466.4 87 -463 43.5 -459.7 0L0 0Z",
        0: "M0 459.7C-41.8 460.9 -83.6 462.2 -119 444C-154.4 425.9 -183.4 388.5 -204.5 354.2C-225.6 319.9 -238.7 288.9 -270.1 270.1C-301.6 251.4 -351.4 244.9 -383.6 221.5C-415.9 198.1 -430.7 157.8 -440.5 118C-450.2 78.3 -455 39.1 -459.7 0L0 0Z"
    },
    wave7: {
        0: "M0 367.8C-33.4 368.7 -66.9 369.7 -95.2 355.2C-123.5 340.7 -146.7 310.8 -163.6 283.4C-180.5 256 -190.9 231.1 -216.1 216.1C-241.3 201.1 -281.1 195.9 -306.9 177.2C-332.7 158.5 -344.6 126.2 -352.4 94.4C-360.2 62.6 -364 31.3 -367.8 0L0 0Z"
    },
    wave8: {
        0: "M0 275.8C-25.1 276.6 -50.1 277.3 -71.4 266.4C-92.6 255.6 -110.1 233.1 -122.7 212.5C-135.3 192 -143.2 173.3 -162.1 162.1C-180.9 150.8 -210.8 146.9 -230.2 132.9C-249.6 118.9 -258.4 94.7 -264.3 70.8C-270.1 47 -273 23.5 -275.8 0L0 0Z"
    },
    wave9: {
        0: "M0 183.9C-16.7 184.4 -33.4 184.9 -47.6 177.6C-61.8 170.4 -73.4 155.4 -81.8 141.7C-90.2 128 -95.5 115.6 -108 108C-120.6 100.5 -140.5 98 -153.5 88.6C-166.4 79.2 -172.3 63.1 -176.2 47.2C-180.1 31.3 -182 15.7 -183.9 0L0 0Z"
    },
    wave10: {
        0: "M0 91.9C-8.4 92.2 -16.7 92.4 -23.8 88.8C-30.9 85.2 -36.7 77.7 -40.9 70.8C-45.1 64 -47.7 57.8 -54 54C-60.3 50.3 -70.3 49 -76.7 44.3C-83.2 39.6 -86.1 31.6 -88.1 23.6C-90 15.7 -91 7.8 -91.9 0L0 0Z"
    },
}

const StyledBackground = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #4F6367;

    .blob1 {
        position: absolute;
        bottom: 0;
        left: 0;
        //flex-grow: 1;
        width: 100%;
        height: auto;
        
    }

    .blob2 {
        position: absolute;
        top: 0;
        right: 0;
        //flex-grow: 1;
        width: 100%;
        height: auto;
    }
`

const Background = props => {
    const leftAnimationRef = useRef(null)
    const rightAnimationRef = useRef(null)

    useEffect(() => {

        leftAnimationRef.current = anime.timeline({
            targets: '#wave1',
            ...animeProps
        }).add({
            easing: 'easeInElastic',
            duration: 1000,
            targets: '#wave1',
            d: keyframes.wave1[0],
            delay: keyframes.delayTime
        }, keyframes.offset).add({
            targets: '#wave2',
            d: keyframes.wave2[0]
        }, keyframes.offset).add({
            targets: '#wave3',
            d: keyframes.wave3[0]
        }, keyframes.offset).add({
            targets: '#wave4',
            d: keyframes.wave4[0]
        }, keyframes.offset).add({
            easing: 'easeInElastic',
            duration: 750,
            targets: '#wave5',
            d: keyframes.wave5[0],
            endDelay: keyframes.delayTime
        }, '-=725')

        rightAnimationRef.current = anime.timeline({
            targets: '#wave6',
            ...animeProps
        }).add({
            easing: 'easeInElastic',
            duration: 1000,
            targets: '#wave6',
            d: keyframes.wave6[0],
            delay: keyframes.delayTime
        }, keyframes.offset).add({
            targets: '#wave7',
            d: keyframes.wave7[0]
        }, keyframes.offset).add({
            targets: '#wave8',
            d: keyframes.wave8[0]
        }, keyframes.offset).add({
            targets: '#wave9',
            d: keyframes.wave9[0]
        }, keyframes.offset).add({
            easing: 'easeInElastic',
            duration: 750,
            targets: '#wave10',
            d: keyframes.wave10[0],
            endDelay: keyframes.delayTime
        }, '-=725')

    }, [])

    return(
        <StyledBackground>
            <Blob1 className="blob1"/>
            <Blob2 className="blob2"/>
        </StyledBackground>
    )
}

export default Background