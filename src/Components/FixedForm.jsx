import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'

const FixedForm = () => {
    return (
        <Box p={"0"} sx={{
            background: "rgba( 255, 255, 255, 0.8 )",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            backdropFilter: "blur( 6.5px )",
            borderRadius: "0.5rem",
            border: "1px solid rgba( 255, 255, 255, 0.18 )"
        }} >
            {/* <Box fontSize={"1.8rem"} >
                Got questions? We've got answers.
            </Box> */}
            <Box display={"flex"} flexDirection={"column"} p={"0.5rem"} width={"fit-content"}  >

                <TextField
                    margin="dense"
                    fullWidth
                    label='Name'
                    size="small"
                />



                <TextField
                    margin="dense"

                    size="small"
                    label='Company Name'
                />

                <TextField
                    margin="dense"

                    size="small"
                    label='Work Email'
                />



                <TextField
                    margin="dense"

                    size="small"
                    label='Phone number'
                />
                <FormControl variant="filled" sx={{ mt: 1, width: "14rem" }}>
                    <InputLabel id="demo-simple-select-filled-label">
                        Work Space Type
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"

                        size="small"
                    // value={age}
                    // onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Private Office
                        </MenuItem>
                        <MenuItem value={20}>Dedicated Desk</MenuItem>
                        <MenuItem value={30}>Hot Desk</MenuItem>
                        <MenuItem value={30}>Meeting Room</MenuItem>
                        <MenuItem value={30}>Coworking</MenuItem>
                        <MenuItem value={30}>Virtual Office</MenuItem>
                    </Select>
                </FormControl>



                <TextField
                    size="small"
                    margin="dense"
                    fullWidth
                    label='Any other requirements'
                />



                <Button sx={{ mt: "0.5rem" }} variant="contained" fullWidth
                >
                    Submit
                </Button>
            </Box>
        </Box>
    )
}

export default FixedForm