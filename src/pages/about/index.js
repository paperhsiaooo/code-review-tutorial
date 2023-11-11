import { Button, Stack } from '@mui/material'
import React from 'react'

function About() {
    const handleEmailClick = () => {
        console.log('handleEmailClick!');
    }

    return (
        <Stack>
            <Button variant='contained' onClick={handleEmailClick}>送出 API</Button>
        </Stack>
    )
}

export default About