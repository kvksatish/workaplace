import logo from './logo.svg';
import './App.css';
import { chosenTheme } from "./theme";
import Navbar from './Components/Navbar';
import Search from './Components/Search';

import { ChakraProvider } from '@chakra-ui/react';
import Cards from './Components/Cards';
import Qform from './Components/Qform';
import Footer from './Components/Footer';
import FixedForm from './Components/FixedForm';
import { Box } from '@mui/material';
function App() {

  return (
    <div className="App">
      <ChakraProvider>
        <Navbar theme={chosenTheme} />
      </ChakraProvider>
      {/* <Box display={"flex"} justifyContent={"right"} p={"2rem"} >
        <FixedForm />
      </Box> */}
      {/* <video width="256" height="256" preload="none" style={{ background: "transparent  url('https://cdn-icons-png.flaticon.com/512/9284/9284465.png') 50% 50% / fit no-repeat" }} loop="true" muted="muted" playsinline="" webboost_found_paused="true" webboost_processed="true" webboost_videoid="0" webboost_userplayed="true">
        <source src="https://cdn-icons-mp4.flaticon.com/512/9284/9284465.mp4" type="video/mp4" />
      </video> */}

      <Box zIndex={"10"} top={"0"} right={"0"} position={"fixed"} pt={"0.5rem"} pr={"0.5rem"} >

        <FixedForm />
      </Box>
      <Qform />
      <Search />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
