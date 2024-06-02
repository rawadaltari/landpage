import { Box, Stack ,Typography, } from '@mui/material'
import SecCard from '../../compon/SecCard'
import Rotate from "react-reveal/Rotate";
export default function OurTeam() {
  return (
   
    <Box sx={{bgcolor:"#f3f3ff",textAlign:"center"}}>
       <Rotate direction={1500} >
     <Typography
          variant="caption"
          sx={{
            color: "#000",
            py:7,
            justifyContent:"center",
            fontSize: "50px",
            fontFamily:"serif",
            fontWeight: 400,
          }}
        >
         What Our Clients Says About us.
        </Typography>
    <Stack  direction={{ sm: "column", lg: "row" }} sx={{justifyContent:"center",
       alignItems:"center",

    }}>
     
        <SecCard name="Ahmad-aladam" direction="web developent & marketing & webdesign" image="/public/images/rrr.jpg"/>
        <SecCard name="rawad-almasri" direction="front-end development & projectmanger" image="/public/images/ttt.jpg"/>
        <SecCard name="alaa-shahine" direction="back-end development & flutter developer" image="/public/images/222.jpg"/>
       
    </Stack>
    </Rotate>
    </Box>
    
  );
}
