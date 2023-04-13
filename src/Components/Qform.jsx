import { Box, Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField } from '@mui/material'
import React from 'react'
import Carousel from 'react-material-ui-carousel'

const Qform = () => {
    function Example(props) {
        var items = [
            {
                name: "Random Name #1",
                description: "Probably the most random thing you have ever seen!"
            },
            {
                name: "Random Name #2",
                description: "Hello World!"
            }
        ]

        return (
            <Carousel>
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
        )
    }

    function Item(props) {
        return (
            <Paper>

            </Paper>
        )
    }
    return (
        <Box  >
            <Box height={"100vh"} >

                <Carousel  >
                    <img style={{
                        width: "100%",
                        height: "100vh",
                        objectFit: "fill"
                    }} src='https://cdn.sanity.io/images/uqxwe2qj/production/b8aeaa863554d3a8f35030605ac1070015eaa725-644x466.png?w=1920&q=75&fit=clip&auto=format' />

                    <img style={{
                        width: "100%",
                        height: "33rem",
                        objectFit: "fill"
                    }} src='https://storage.googleapis.com/nextivawebsites-wordpressfiles-voip/var/www/virtual/nextiva.com/voip/How-to-Get-More-Productivity-From-a-Larger-Team-scaled.jpg' />

                    <img style={{
                        width: "100%",
                        height: "33rem",
                        objectFit: "fill"
                    }} src='https://www.incimages.com/uploaded_files/image/1920x1080/getty_517610514_353435.jpg' />

                    <img style={{
                        width: "100%",
                        height: "33rem",
                        objectFit: "fill"
                    }} src='https://image.archify.com/blog/l/73zpaujs.jpg' />
                </Carousel>
            </Box>

        </Box>
    )
}

export default Qform