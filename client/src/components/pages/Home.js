import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import anime from 'animejs'

// COMPONENTS
import Blobtext from '../pieces/Blobtext'

const StyledHome = styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    align-items: center;
    justify-content: center;

    .landing-text{
        width:100%;
    }
`

// const oldblobColors = ['#f5a147','#51cad8','#112b39']
const blobColors = ['#FE5F55','#7A9E9F','#EEF5DB']

const Home = props => {

    return(
        <StyledHome>
                <Blobtext className="landing-text" blobColors={blobColors}/>
        </StyledHome>
    )
}

export default Home