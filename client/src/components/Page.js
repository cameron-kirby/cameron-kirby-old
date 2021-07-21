import React from 'react'
import styled from 'styled-components'

// COMPONENTS
import Nav from './Nav'
import Content from './Content'
import Background from './Background'

const StyledPage = styled.div`
    display: flex;
`


const Page = props => {

    return(
        <StyledPage>
            <Nav/>
            <Background/>
        </StyledPage>
    )
}

export default Page