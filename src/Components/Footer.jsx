import { Facebook, FacebookOutlined, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import { Box } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <Box id={"footer"} bgcolor={"#f6f6f6"} height={"10rem"} display={"flex"} flexDirection={"column"} justifyContent={"space-evenly"} alignItems={"center"} >
            <Box fontSize={"2rem"} >
                WorkaPlace
            </Box>
            <Box>
                Copyright © 2023 WorkaPlace Companies Inc.

                All rights reserved
            </Box>
            <Box >
                <Facebook />
                <Twitter />
                <LinkedIn />
                <Instagram />
            </Box>
        </Box>
    )
}

export default Footer