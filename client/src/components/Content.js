import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from "react-router-dom";

// COMPONENTS
import Panel from './Panel'
import Home from './pages/Home'
import About from './pages/About'


const StyledContent = styled.div`
    width: 100%;
`

const Content = ({transition, setTransition}) => {

    return(
        <StyledContent>
            <Switch>
                <Route path="/about">
                    <Panel transition={transition} setTransition={setTransition}>
                        <About></About>
                    </Panel>
                </Route>
                <Route path="/">
                    <Home transition={transition} setTransition={setTransition}/>
                </Route>
            </Switch>
        </StyledContent>
    )
}

export default Content