import { Button, Stack } from '@mui/material'
import React from 'react'

function About() {
    function getActivtyData() {
        let fetchData = null
        const data = fetch('http://localhost:3001/api/hello', { hallId: '1' })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    
    const handleEmailClick = () => {
        console.log('handleEmailClick!');
    }
    
    const handleCancelClick = () => {
        console.log('handleEmailClick!');
    }

    return (
        <Stack>
            <Button variant='contained' onClick={getActivtyData}>獲取聽館資料</Button>
            <Button variant='contained' onClick={handleEmailClick}>送出信件</Button>
            <Button variant='contained' onClick={handleCancelClick}>取消</Button>
        </Stack>
    )
}

export default About