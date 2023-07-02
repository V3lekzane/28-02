import { Container } from '@mui/material'
import React from 'react'
import Home from 'container/Home/Home'
type Props = {}

const Main = (props: Props) => {
    return (
        <Container
            sx={{
                padding: '40px 0',
            }}
        >
            <Home />
        </Container>
    )
}

export default Main
