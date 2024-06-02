import { Container, Typography, Box } from "@mui/material";
import Zoom from "react-reveal/Zoom";

export default function Newsletter(props) {
  return (
    <Container>
      <Zoom top  >
      <Box
        sx={{
          
          display: "colum",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          py:6,
          
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: "#000",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          {props.Title}
        </Typography>
        <Typography
          sx={{
            
            fontSize: "17px",
            color: "#777",
            gap: "5px",
            fontWeight: "bold",
          }}
          href="#"
          underline="none"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
          voluptatibus eos asperiores ullam delectus!<br></br>
          consectetur inventore suscipit non Nullav.
          
        </Typography>
      </Box>
      </Zoom>
    </Container>
  );
}
