import React, { useEffect, useState } from "react";
import "./Header.css";
import { Fade } from "react-reveal";

import { greeting, settings } from "./portfolio";
import { Box, Image } from "@chakra-ui/react";

export const Navbar = ({ theme: theme1 }) => {


    const onMouseEnter = (event, color) => {
        const el = event.target;
        el.style.backgroundColor = color;
    };

    const onMouseOut = (event) => {
        const el = event.target;
        el.style.backgroundColor = "transparent";
    };
    const [scroll, setscroll] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY < 60) {

                setscroll(false)
            }
            else {
                setscroll(true)
            }
        })
    }, [])

    const handlescroll = (id) => {
        console.log(id)
        const section = document.querySelector(`#${id}`);
        //console.log(section)
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });

    }

    const theme = theme1;
    const link = settings.isSplash ? "/splash" : "home";
    return (
        <div >
            <Fade style={{ width: "100%" }} top duration={1000} distance="20px">


                <div className={scroll ? "header1" : "header"}  >
                    <div className="logo">

                        <Box fontSize={"1.5rem"} >
                            <Box>
                                WorkaPlace
                            </Box>
                            <Box fontSize={"0.8rem"} >
                                You Believe We Create
                            </Box>

                        </Box>


                    </div>
                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" htmlFor="menu-btn">
                        <span className="navicon"></span>
                    </label>
                    <ul className="menu" >
                        <li>
                            <div
                                onClick={() => console.log("first")}
                                activeStyle={{ fontWeight: "bold" }}
                                style={{ color: theme.text, padding: "1rem" }}
                                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                                onMouseOut={(event) => onMouseOut(event)}
                            >
                                Office Interiors
                            </div>
                        </li>

                        <li>
                            <div

                                activeStyle={{ fontWeight: "bold" }}
                                style={{ color: theme.text, padding: "1rem" }}
                                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                                onMouseOut={(event) => onMouseOut(event)}
                            >
                                Work Space Management
                            </div>
                        </li>

                        <li>
                            <div

                                activeStyle={{ fontWeight: "bold" }}
                                style={{ color: theme.text, padding: "1rem" }}
                                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                                onMouseOut={(event) => onMouseOut(event)}
                            >
                                Coworking
                            </div>
                        </li>
                        <li>
                            <div
                                onClick={() => handlescroll("footer")}
                                activeStyle={{ fontWeight: "bold" }}
                                style={{ color: theme.text, padding: "1rem" }}
                                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                                onMouseOut={(event) => onMouseOut(event)}
                            >
                                Contact Us
                            </div>
                        </li>
                    </ul>
                </div>

            </Fade>
        </div>
    );
}

export default Navbar;
