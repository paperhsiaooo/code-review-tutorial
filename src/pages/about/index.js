import { Button, Stack } from '@mui/material'
import { format, isBefore } from 'date-fns'
import React from 'react'

const mockAPIData = {
    startTime: new Date(),
    endTime: new Date(),
    sex: 1,
    name: 'Peter',
    phone: '090012323',
    email: '恭喜玩家獲得賓士 GLS 450 4MATIC 豪華休旅車一輛，請於 2021/10/31 前，攜帶身分證件至台北市中山區南京東路三段 337 號 3 樓領取，逾期視同放棄。'
}

function About() {
    function checkValid(payload) {
        if(isBefore(payload.startTime, new Date())) {
            return false
        }

        if(payload.name === '') {
            return false
        }

        if(!payload.phone.match(/^09\d{8}$/)) {
            return false
        }

        return true
    }

    function getActivityString(payload) {
        const {startTime, endTime, sex, name, phone} = payload
        const startTimeString = format(startTime, 'yyyy/MM/dd HH:mm')
        const endTimeString = format(endTime, 'yyyy/MM/dd HH:mm')
        const sexString = sex === 1 ? '男' : '女'

        return `活動時間：${startTimeString} ~ ${endTimeString}，性別：${sexString}，姓名：${name}，電話：${phone}`
    }
    
    function handleHallClick() {
        if(!checkValid(mockAPIData)) {
            return
        }

        const activityString = getActivityString(mockAPIData)
        // get hall data with "activityString" from api ...
    }
    
    const handleEmailClick = () => {
        console.log('handleEmailClick!');
    }
    
    const handleCancelClick = () => {
        console.log('handleEmailClick!');
    }

    return (
        <Stack>
            <Button variant='contained' onClick={handleHallClick}>獲取聽館資料</Button>
            <Button variant='contained' onClick={handleEmailClick}>送出信件</Button>
            <Button variant='contained' onClick={handleCancelClick}>取消</Button>
        </Stack>
    )
}

export default About