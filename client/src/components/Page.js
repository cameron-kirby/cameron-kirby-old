import React from 'react'
import styled from 'styled-components'

// COMPONENTS
import Nav from './Nav'
import Content from './Content'
import Background from './Background'

const StyledPage = styled.div`

`


const Page = props => {

    return(
        <StyledPage>
            <Nav/>
            <Background/>
            <Content />
        </StyledPage>
    )
}

export default Page