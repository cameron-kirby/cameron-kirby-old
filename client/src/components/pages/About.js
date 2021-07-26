import React from 'react'
import styled from 'styled-components'

// IMAGES
import myface from '../../assets/myface.jpg'

const StyledAbout = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-around;
    align-items: center;

    .about-text {
        width: 50%;
        p {
            line-height: 1.5;
            text-align: left;
        }
    }

    .about-image {
        padding: 2rem 1rem;
        width: 33%;
        // Background
        backdrop-filter: blur(20px) saturate(190%);
        -webkit-backdrop-filter: blur(20px) saturate(190%);
        background-color: rgba(255,255,255,0.2);
        border-radius:20px;
        border: 1px solid rgba(209,213,219, 0.3);

        img {
            width: 90%;
            border-radius:15px;
        }
    }
`

const About = () => {

    return(
        <StyledAbout>
            <div className="about-text">
                <h1>About me</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non tellus id libero pulvinar dignissim id et nibh. Cras feugiat massa quis dui auctor consequat. Cras tincidunt sed lectus vitae faucibus. Morbi fringilla porta consequat. Fusce suscipit tincidunt lacus nec fringilla. Quisque aliquam vel ante non facilisis. Sed dictum erat quis lacinia interdum. Sed eu rutrum diam, at pulvinar augue. Aliquam a libero nisl. Pellentesque et ligula a sem mattis cursus. Nam vel quam nisl.</p>
                <p>Integer volutpat neque a augue ullamcorper, vitae efficitur augue blandit. Suspendisse in erat vel enim gravida sodales rutrum sed urna. Ut mattis neque a pharetra sollicitudin. Morbi mattis efficitur ultrices. Etiam id risus elementum, suscipit sem vel, tempor magna. Integer vel leo quis lorem imperdiet facilisis et finibus nisl. Vivamus tortor ante, bibendum eget mi non, laoreet finibus risus. Phasellus nec tempor erat. Nullam egestas libero et est mattis, eget pulvinar neque elementum. Vivamus laoreet vel leo nec porttitor. Integer sagittis porta dapibus. Aliquam euismod molestie velit porta mattis. Sed sem ligula, ultrices nec ante sed, lacinia consequat nibh.</p>
            </div>
            <div className="about-image">
                <img src={myface} alt="myface" />
            </div>
        </StyledAbout>
    )
}

export default About