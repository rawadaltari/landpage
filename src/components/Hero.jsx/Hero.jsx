import {  Box, Stack, Typography, Link } from "@mui/material";
import Img1 from "../../../public/images/hero-img.jpg";
import Zoom from "react-reveal/Zoom";
import Btn from "../../compon/Btn";

export default function Hero() {
  return (
    <Box  sx={{ position: "relative", }}>
      <img src={Img1} alt="###" style={{ width: "100%", height: "500px" }} />

      <Stack 
      display={{xs:"none",md:"flex",}}
        sx={{
          
          position: "absolute",
          top: "40%",
          left: "6%",
          transform: "transLateY(-50%)",
          
        }}
      >
        <Zoom left  direction={3000}>
        <Typography
          variant="caption"
          sx={{
            color: "#000",
            
            fontSize: "55px",
            fontFamily:"monospace",
            fontWeight: "400",
          }}
        >
          The Leader<br></br> In Web Site
        </Typography>
        <Link
          sx={{
            marginTop: "20px",
            fontSize: "50px",
            color: "#777",
            display: "flex",
            gap: "5px",
            alignItems: "center",
            fontWeight: "bold",
            "&:hover": {
              color: "#eab676",
            },
          }}
          href="#"
          underline="none"
        >
          World
         
        </Link>
       <Btn title="get start"/>
        </Zoom>
      </Stack>
      
    </Box>
  );
}
