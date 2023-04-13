import React from 'react'
import SpaceCard from './SpaceCard'
import { Box } from '@mui/material'

const Cards = () => {
    return (
        <Box display={"flex"} flexWrap={"wrap"} alignItems={"center"} justifyContent={"center"} >
            {
                new Array(10).fill(0).map((ele) => {
                    return <SpaceCard />
                })
            }
        </Box>
    )
}

export default Cards