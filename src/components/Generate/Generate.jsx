import { Stack, Box ,Typography,Button, Container} from "@mui/material";
import screencode from '../../../public/Anmation/screencode.json';
import Lottie from "lottie-react";
import Btn from "../../compon/Btn";

export default function Generate() {
  return (
    <Stack sx={{justifyContent:"space-between"}} direction={{ sm: "column", lg: "row" }}>
     
      <Box width={{sm:"100%",lg:"50%"}} sx={{  bgcolor: "#f3f3ff",px:"30px" ,}}>
      
        <Typography
          variant="caption"
          sx={{
            textAlign: "left",
            color: "#000",
                py:7,
            fontSize: "55px",
          }}
        >
          Generate Content Instantly
        </Typography>
        <Typography
          sx={{
            p:3,
            fontSize: "16px",
            fontWeight: "200",
            color: "#776",
          }}
        >
          Save time with AI-generated content<br></br> thats tailored to your audience.
          From blog posts to product descriptions, let AI do the writing for you
        </Typography>

        <Box flexGrow={1} />
        <Btn title="design in" sx={{py:1}}/>
      </Box>
      <Box width={{sm:"100%",lg:"50%"}} sx={{ justifyContent:"center", bgcolor: "#bbbbbb",}}>
        <Container >
          <Lottie style={{height:"300px",px:4,justifyContent:"center"}} animationData={screencode} />
        </Container>
      
      </Box>
      
    </Stack>
  );
}
