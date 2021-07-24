import React, { useState } from 'react'
import styled from 'styled-components'

// COMPONENTS
import Nav from './Nav'
import Content from './Content'
import Background from './Background'

const StyledPage = styled.div`

`


const Page = props => {
    const [transition, setTransition] = useState("idle")

    return(
        <StyledPage>
            <Nav setTransition={setTransition}/>
            <Background/>
            <Content transition={transition} setTransition={setTransition}/>
        </StyledPage>
    )
}

export default Page