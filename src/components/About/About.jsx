import { Box, Typography } from "@mui/material";
import React from "react";
// import Img3 from "../../images/77.png";
import Lottie from "lottie-react";
import labtop from '../../../public/Anmation/labtop.json';
import Zoom from "react-reveal/Zoom";
export default function About() {
  return (
   
    <Box
      sx={{ textAlign: "center", justifyContent: "center", bgcolor: "#69a5a4", }}
    >
       <Zoom top >
      <Typography
        variant="caption"
        sx={{
          color: "#fff",
          fontSize: "52px",
          fontFamily: "cursive",
          fontWeight: "400",
        }}
      >
        Seamless Across <br></br>All Devices
      </Typography>
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: "200",
          my: 2,
          color: "#e2e3e5",
        }}
      >
        Ensure your website looks amazing on any device. Our AI optimizes
        <br></br>
        layouts to be fully responsive and mobile-friendly
      </Typography>
      <Typography
        sx={{
          color: "#fff",
          fontSize: "20px",
          fontFamily: "cursive",
          fontWeight: "300",
          py: 1,
          width: "auto",
          textDecoration: "underline",
        }}
      >
        Create Responsive Design
      </Typography>
      <Box sx={{  height:"400px" }}>
        {/* <img
          src={Img3}
          alt="###"
          
        /> */}
        <Lottie style={{height:"500px"}} animationData={labtop}/>
      </Box>
      </Zoom>
    </Box>
   
  );
}
