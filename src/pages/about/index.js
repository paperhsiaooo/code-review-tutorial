import { Button, Stack } from '@mui/material'
import React from 'react'

function About() {
    const handleEmailClick = () => {
        console.log('handleEmailClick!');
    }
    
    const handleCancelClick = () => {
        console.log('handleEmailClick!');
    }

    return (
        <Stack>
            <Button variant='contained' onClick={handleEmailClick}>送出信件</Button>
            <Button variant='contained' onClick={handleCancelClick}>取消</Button>
        </Stack>
    )
}

export default About