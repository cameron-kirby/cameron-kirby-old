import React from 'react'
import styled from 'styled-components'

// COMPONENTS
import Home from './pages/Home'

const StyledContent = styled.div`
    margin-left:5rem;
    width: 100%;
`

const Content = props => {

    return(
        <StyledContent>
            <Home />
        </StyledContent>
    )
}

export default Content