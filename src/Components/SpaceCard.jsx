import { Coffee, CoffeeMakerOutlined, MeetingRoomOutlined, SportsGymnasticsOutlined } from '@mui/icons-material'
import { Box } from '@mui/material'
import React from 'react'

const SpaceCard = () => {
    return (
        <Box className='cardcon' boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px'} alignItems={"left"} justifyContent={"left"} display={"flex"} flexWrap={"wrap"} border={"2px solid white"} width={"fit-content"} m={"1rem"} p={"1rem"} borderRadius={"1rem"}  >
            <Box className='imagecont' borderRadius={"0.5rem"} overflow={"hidden"} maxWidth={"20rem"} m={"auto"}>
                <img className='imagehover' style={{ borderRadius: "0.5rem" }} src='https://cdn.shopify.com/s/files/1/0490/9232/9628/products/1_993d5f84-c5b3-4cf6-b543-cc714a506062.jpg?v=1603909937?imwidth=3840' />
            </Box>
            <Box width={"15rem"} p={"0.5rem"} textAlign={"left"} >
                <Box bgcolor={"#ccccff"} width={"fit-content"} m={"0.2rem"} p={"0.2rem"} px={"1rem"} borderRadius={"0.2rem"} sx={{ cursor: "pointer" }} fontFamily={"cursive"} fontWeight={"600"} >
                    Opening shortly
                </Box>
                <Box display={"flex"} flexWrap={"wrap"} >
                    <Box fontSize={"1rem"} fontFamily={"cursive"} fontWeight={"700"} >
                        WeWork Prestige Tech Park
                    </Box>


                </Box>
                <Box textAlign={"left"} fontWeight={"600"} color={"grey"} fontSize={"1rem"} fontFamily={"cursive"} >
                    Jupiter block, Prestige Tech Park
                </Box>
                <Box display={"flex"} fontFamily={"cursive"} fontSize={"0.7rem"} color={"grey"} width={"fit-content"}  >
                    <Box m={"0.5rem"} >
                        <CoffeeMakerOutlined border={"1px solid red"} />
                        <Box color={"black"} >

                            Coffee Bar
                        </Box>
                    </Box>
                    <Box m={"0.5rem"}   >
                        <MeetingRoomOutlined />
                        <Box color={"black"} >

                            Conferencing facilities
                        </Box>
                    </Box>
                    <Box m={"0.5rem"}   >
                        <SportsGymnasticsOutlined />
                        <Box color={"black"} >

                            Gym
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default SpaceCard