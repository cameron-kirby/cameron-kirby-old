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
        0: "M0 -459.7C40.4 -455.5 80.7 -451.2 118 -440.5C155.3 -429.7 189.5 -412.5 228.5 -395.8C267.5 -379 311.3 -362.8 325.1 -325.1C338.8 -287.3 322.6 -228.1 327.4 -189C332.1 -149.9 357.9 -130.9 383.5 -102.8C409 -74.6 434.4 -37.3 459.7 0L0 0Z",
        1: "M0 -459.7C32.2 -430.4 64.5 -401.1 106.4 -397C148.3 -392.9 199.8 -414.1 229.9 -398.1C259.9 -382.1 268.3 -329 297.7 -297.7C327.1 -266.4 377.4 -257.1 394 -227.5C410.7 -197.9 393.6 -148.2 398.9 -106.9C404.3 -65.6 432 -32.8 459.7 0L0 0Z"
    },
    wave2: {
        0: "M0 -367.8C32.3 -364.4 64.6 -361 94.4 -352.4C124.2 -343.8 151.6 -330 182.8 -316.6C214 -303.2 249 -290.2 260 -260C271.1 -229.9 258.1 -182.5 261.9 -151.2C265.7 -119.9 286.3 -104.7 306.8 -82.2C327.2 -59.7 347.5 -29.8 367.8 0L0 0Z",
        1: "M0 -367.8C25.8 -344.3 51.6 -320.9 85.1 -317.6C118.6 -314.3 159.9 -331.3 183.9 -318.5C207.9 -305.7 214.6 -263.2 238.2 -238.2C261.7 -213.1 301.9 -205.7 315.2 -182C328.5 -158.3 314.9 -118.5 319.1 -85.5C323.4 -52.5 345.6 -26.2 367.8 0L0 0Z"
    },
    wave3: {
        0: "M0 -275.8C24.2 -273.3 48.4 -270.7 70.8 -264.3C93.2 -257.8 113.7 -247.5 137.1 -237.5C160.5 -227.4 186.8 -217.7 195 -195C203.3 -172.4 193.6 -136.9 196.4 -113.4C199.3 -89.9 214.7 -78.5 230.1 -61.7C245.4 -44.8 260.6 -22.4 275.8 0L0 0Z",
        1: "M0 -275.8C19.3 -258.2 38.7 -240.6 63.8 -238.2C89 -235.8 119.9 -248.5 137.9 -238.9C155.9 -229.3 161 -197.4 178.6 -178.6C196.2 -159.9 226.4 -154.2 236.4 -136.5C246.4 -118.8 236.2 -88.9 239.4 -64.1C242.6 -39.4 259.2 -19.7 275.8 0L0 0Z"
    },
    wave4: {
        0: "M0 -183.9C16.1 -182.2 32.3 -180.5 47.2 -176.2C62.1 -171.9 75.8 -165 91.4 -158.3C107 -151.6 124.5 -145.1 130 -130C135.5 -114.9 129 -91.2 130.9 -75.6C132.9 -60 143.2 -52.4 153.4 -41.1C163.6 -29.8 173.7 -14.9 183.9 0L0 0Z",
        1: "M0 -183.9C12.9 -172.2 25.8 -160.4 42.5 -158.8C59.3 -157.2 79.9 -165.6 91.9 -159.2C103.9 -152.9 107.3 -131.6 119.1 -119.1C130.8 -106.6 151 -102.8 157.6 -91C164.3 -79.2 157.4 -59.3 159.6 -42.8C161.7 -26.2 172.8 -13.1 183.9 0L0 0Z"
    },
    wave5: {
        0: "M0 -91.9C8.1 -91.1 16.1 -90.2 23.6 -88.1C31.1 -85.9 37.9 -82.5 45.7 -79.2C53.5 -75.8 62.3 -72.6 65 -65C67.8 -57.5 64.5 -45.6 65.5 -37.8C66.4 -30 71.6 -26.2 76.7 -20.6C81.8 -14.9 86.9 -7.5 91.9 0L0 0Z",
        1: "M0 -91.9C6.4 -86.1 12.9 -80.2 21.3 -79.4C29.7 -78.6 40 -82.8 46 -79.6C52 -76.4 53.7 -65.8 59.5 -59.5C65.4 -53.3 75.5 -51.4 78.8 -45.5C82.1 -39.6 78.7 -29.6 79.8 -21.4C80.9 -13.1 86.4 -6.6 91.9 0L0 0Z"
    },
    wave6: {
        0: "M0 459.7C-41.8 460.9 -83.6 462.2 -119 444C-154.4 425.9 -183.4 388.5 -204.5 354.2C-225.6 319.9 -238.7 288.9 -270.1 270.1C-301.6 251.4 -351.4 244.9 -383.6 221.5C-415.9 198.1 -430.7 157.8 -440.5 118C-450.2 78.3 -455 39.1 -459.7 0L0 0Z",
        1: "M0 459.7C-41.4 459 -82.9 458.4 -119 444C-155.1 429.7 -185.9 401.7 -218.5 378.5C-251.1 355.2 -285.6 336.7 -307.6 307.6C-329.6 278.5 -339 238.7 -355.1 205C-371.2 171.3 -393.9 143.7 -412.5 110.5C-431 77.4 -445.4 38.7 -459.7 0L0 0Z"
    },
    wave7: {
        0: "M0 367.8C-33.4 368.7 -66.9 369.7 -95.2 355.2C-123.5 340.7 -146.7 310.8 -163.6 283.4C-180.5 256 -190.9 231.1 -216.1 216.1C-241.3 201.1 -281.1 195.9 -306.9 177.2C-332.7 158.5 -344.6 126.2 -352.4 94.4C-360.2 62.6 -364 31.3 -367.8 0L0 0Z",
        1: "M0 367.8C-33.1 367.2 -66.3 366.7 -95.2 355.2C-124.1 343.8 -148.7 321.4 -174.8 302.8C-200.9 284.2 -228.5 269.4 -246.1 246.1C-263.6 222.8 -271.2 191 -284.1 164C-296.9 137 -315.1 114.9 -330 88.4C-344.8 61.9 -356.3 30.9 -367.8 0L0 0Z"
    },
    wave8: {
        0: "M0 275.8C-25.1 276.6 -50.1 277.3 -71.4 266.4C-92.6 255.6 -110.1 233.1 -122.7 212.5C-135.3 192 -143.2 173.3 -162.1 162.1C-180.9 150.8 -210.8 146.9 -230.2 132.9C-249.6 118.9 -258.4 94.7 -264.3 70.8C-270.1 47 -273 23.5 -275.8 0L0 0Z",
        1: "M0 275.8C-24.9 275.4 -49.7 275 -71.4 266.4C-93.1 257.8 -111.5 241 -131.1 227.1C-150.7 213.1 -171.4 202 -184.6 184.6C-197.7 167.1 -203.4 143.2 -213 123C-222.7 102.8 -236.3 86.2 -247.5 66.3C-258.6 46.4 -267.2 23.2 -275.8 0L0 0Z"
    },
    wave9: {
        0: "M0 183.9C-16.7 184.4 -33.4 184.9 -47.6 177.6C-61.8 170.4 -73.4 155.4 -81.8 141.7C-90.2 128 -95.5 115.6 -108 108C-120.6 100.5 -140.5 98 -153.5 88.6C-166.4 79.2 -172.3 63.1 -176.2 47.2C-180.1 31.3 -182 15.7 -183.9 0L0 0Z",
        1: "M0 183.9C-16.6 183.6 -33.1 183.4 -47.6 177.6C-62 171.9 -74.3 160.7 -87.4 151.4C-100.5 142.1 -114.3 134.7 -123 123C-131.8 111.4 -135.6 95.5 -142 82C-148.5 68.5 -157.6 57.5 -165 44.2C-172.4 30.9 -178.1 15.5 -183.9 0L0 0Z"
    },
    wave10: {
        0: "M0 91.9C-8.4 92.2 -16.7 92.4 -23.8 88.8C-30.9 85.2 -36.7 77.7 -40.9 70.8C-45.1 64 -47.7 57.8 -54 54C-60.3 50.3 -70.3 49 -76.7 44.3C-83.2 39.6 -86.1 31.6 -88.1 23.6C-90 15.7 -91 7.8 -91.9 0L0 0Z",
        1: "M0 91.9C-8.3 91.8 -16.6 91.7 -23.8 88.8C-31 85.9 -37.2 80.3 -43.7 75.7C-50.2 71 -57.1 67.3 -61.5 61.5C-65.9 55.7 -67.8 47.7 -71 41C-74.2 34.3 -78.8 28.7 -82.5 22.1C-86.2 15.5 -89.1 7.7 -91.9 0L0 0Z"
    },
}
// IMPORTANT FRAME PROPERTIES
let lastFrameProps = {
    // Remember to change offset to '-=750'
    easing: 'easeInElastic',
    duration: 750,
    endDelay: keyframes.delayTime
}

const StyledBackground = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #4F6367;
    margin-left: 5rem;

    .blob1 {
        position: absolute;
        bottom: 0;
        left: 5rem;
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
        // LEFT SIDE ANIMATION TIMELINE
        leftAnimationRef.current = anime.timeline({
            targets: '#wave1',
            ...animeProps
        }).add({
            targets: '#wave1',
            d: keyframes.wave1[0],
            easing: 'easeInElastic',
            duration: 1000,
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
            targets: '#wave5',
            d: keyframes.wave5[0],
        }, keyframes.offset).add({
            targets: '#wave1',
            d: keyframes.wave1[1],
            easing: 'easeInElastic',
            duration: 1000,
            delay: keyframes.delayTime
        }, keyframes.offset).add({
            targets: '#wave2',
            d: keyframes.wave2[1]
        }, keyframes.offset).add({
            targets: '#wave3',
            d: keyframes.wave3[1]
        }, keyframes.offset).add({
            targets: '#wave4',
            d: keyframes.wave4[1]
        }, keyframes.offset).add({
            targets: '#wave5',
            d: keyframes.wave5[1],
            ...lastFrameProps
        }, '-=725')

        // RIGHT SIDE ANIMATION TIMELINE
        rightAnimationRef.current = anime.timeline({
            targets: '#wave6',
            ...animeProps
        }).add({
            targets: '#wave6',
            d: keyframes.wave6[0],
            easing: 'easeInElastic',
            duration: 1000,
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
            targets: '#wave10',
            d: keyframes.wave10[0],
        }, keyframes.offset).add({
            targets: '#wave6',
            d: keyframes.wave6[1],
            easing: 'easeInElastic',
            duration: 1000,
            delay: keyframes.delayTime
        }, keyframes.offset).add({
            targets: '#wave7',
            d: keyframes.wave7[1]
        }, keyframes.offset).add({
            targets: '#wave8',
            d: keyframes.wave8[1]
        }, keyframes.offset).add({
            targets: '#wave9',
            d: keyframes.wave9[1]
        }, keyframes.offset).add({
            targets: '#wave10',
            d: keyframes.wave10[1],
            ...lastFrameProps
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