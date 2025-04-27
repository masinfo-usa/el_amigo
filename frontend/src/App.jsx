import React, {useEffect} from "react";
import { Box, Link, Stack } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import StorePage from "./pages/StorePage";
import CreatePage from "./pages/CreatePage";
import FixedNavBar from "./pages/FixedNavBar";
import CommonNavbar from "./pages/CommonNavbar";
import CommonFooter from "./pages/CommonFooter";
import Login from "./pages/Login";
import AddressForm from "./pages/ReservationForm";
//import AddressForm from "./pages/Test";
import { useMediaQuery, useTheme } from '@mui/material';
import { useProductStore } from './store/product';
import HomePage from "./pages/HomePage";
import Menu from "./pages/Menu";
import Gallery from "./components/Gallery";



function App() {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md')); // Returns true if screen width is less than 'md'


  const updateAspectRatio = useProductStore((state) => state.updateAspectRatio);

  useEffect(() => {
    const handleResize = () => {
      updateAspectRatio();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateAspectRatio]);


//"#f7f5f0"
  return (
      <Box px={0} py={0} sx={{backgroundColor:'#fff'}}>
        <CommonNavbar />

        {/* Define Routes for the pages */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/testpage" element={<AddressForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>

        <CommonFooter />
        
      </Box>
  );
}

export default App;
