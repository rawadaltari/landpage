import { Container, Stack, Typography } from "@mui/material";
import { Box } from "@mui/material";

import Button from "@mui/material/Button";
import Img1 from "../../../public/images/hero-img.jpg";
export default function Navbar() {
  return (
    <Box
     sx={{
          py:1,
          backgroundImage:`url(${Img1})`,
  
        }}
    >
      <Container>
        <Stack direction={"row"} alignItems={"center"}>
          <Typography
            sx={{
              mr: 2,
              p: "3px 10px",
              fontSize: "20px",
              color: "#000",
              
            }}
            variant="body2"
          >
            Logo
          </Typography>
          <Stack
            direction={"row"}
            sx={{display:{xs:"none",sm:"flex",justifyContent: "center", alignItems: "center",flexGrow:1,}}}
            // sx={{ display:"flex",justifyContent: "center", alignItems: "center",flexGrow:1,  }}
          >
            <Button
              sx={{ textDecoration: "none", color: "#fff",fontSize:12,bgcolor:"#000" }}
              
            >
              HOME
            </Button>
            <Button
              sx={{ textDecoration: "none", color: "#000",fontSize:12 }}
              variant="text"
            >
              ABOUT
            </Button>
            <Button
              sx={{ textDecoration: "none", color: "#000",fontSize:12, }}
              variant="text"
            >
              CONTACT
            </Button>
            <Button
              sx={{ textDecoration: "none", color: "#000",fontSize:12 }}
              variant="text"
            >
              Service
            </Button>
          </Stack>

          <Box   >
            <Button   size="small"sx={{color:"#000"}} >
              SignUp
            </Button>
            <Button  size="small" sx={{ bgcolor: "#fff",width:"30px",color:"#000"}} variant="Log In">Login</Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
