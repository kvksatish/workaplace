
import { Box, TextField } from '@mui/material'
import React from 'react'

const Search = () => {
    return (
        <Box>
            <Box mt={"3rem"} fontSize={"2.5rem"}  >
                Coworking Space in Bangalore
            </Box>
            <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"} >


                <TextField

                    margin="normal"
                    name="Location"
                    label="Location"
                    type="Location"
                    id="Location"
                    autoComplete="Location"
                />
                <TextField
                    margin="normal"


                    name="WorkSpace Type"
                    label="WorkSpace Type"
                    type="WorkSpace Type"
                    id="WorkSpace Type"
                    autoComplete="WorkSpace Type"
                />
                <Box minWidth={"14rem"} >
                    <TextField
                        margin="normal"

                        fullWidth
                        name="Date"

                        type="Date"
                        id="Date"
                        autoComplete="Date"
                    />
                </Box>

            </Box>
            <Box display={"flex"} flexWrap={"wrap"} p={"1rem"} >

                <Box border={"1.5px solid black"} width={"fit-content"} m={"1rem"} p={"1rem"} borderRadius={"0.4rem"} sx={{ cursor: "pointer" }} >
                    ALL
                </Box>
                <Box border={"1.5px solid black"} width={"fit-content"} m={"1rem"} p={"1rem"} borderRadius={"0.4rem"} sx={{ cursor: "pointer" }} >
                    Marathalli
                </Box>
                <Box border={"1.5px solid black"} width={"fit-content"} m={"1rem"} p={"1rem"} borderRadius={"0.4rem"} sx={{ cursor: "pointer" }} >
                    Koramangala
                </Box>
                <Box border={"1.5px solid black"} width={"fit-content"} m={"1rem"} p={"1rem"} borderRadius={"0.4rem"} sx={{ cursor: "pointer" }} >
                    MG Road
                </Box>
                <Box border={"1.5px solid black"} width={"fit-content"} m={"1rem"} p={"1rem"} borderRadius={"0.4rem"} sx={{ cursor: "pointer" }} >
                    Bannerghatta Main Rd
                </Box>
                <Box border={"1.5px solid black"} width={"fit-content"} m={"1rem"} p={"1rem"} borderRadius={"0.4rem"} sx={{ cursor: "pointer" }} >
                    Infantry Road
                </Box>
                <Box border={"1.5px solid black"} width={"fit-content"} m={"1rem"} p={"1rem"} borderRadius={"0.4rem"} sx={{ cursor: "pointer" }} >
                    Domlur
                </Box>
                <Box border={"1.5px solid black"} width={"fit-content"} m={"1rem"} p={"1rem"} borderRadius={"0.4rem"} sx={{ cursor: "pointer" }} >
                    Bellandur
                </Box>
                <Box border={"1.5px solid black"} width={"fit-content"} m={"1rem"} p={"1rem"} borderRadius={"0.4rem"} sx={{ cursor: "pointer" }} >
                    Hebbal
                </Box>
                <Box border={"1.5px solid black"} width={"fit-content"} m={"1rem"} p={"1rem"} borderRadius={"0.4rem"} sx={{ cursor: "pointer" }} >
                    Mahadevapura
                </Box>

            </Box>
        </Box>
    )
}

export default Search