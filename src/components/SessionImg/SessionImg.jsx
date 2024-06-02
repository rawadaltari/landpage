import { Box, Stack, Container, Typography, Link, Button } from "@mui/material";

import "./style.css";
import Lottie from "lottie-react";
import codei from "../../../public/Anmation/codei.json";
import Fade from "react-reveal/Fade";
import Btn from "../../compon/Btn";
export default function SessionImg() {
  return (
    <Box
      sx={{
        my: 2,
        bgcolor: "#d9dadc",
      }}
    >
      <Fade left direction={1500}>
        <Container>
          <Stack
            direction={{ sm: "column", lg: "row" }}
            sx={{ justifyContent: "spacebetween" }}
          >
            <Box>
              <Lottie
                style={{ justifyContent: "center" }}
                animationData={codei}
              />
            </Box>

            <Box sx={{ py: "50px" }}>
              <Typography
                variant="caption"
                sx={{
                  textAlign: "center",
                  color: "#000",

                  fontSize: "55px",
                }}
              >
                Customize with Ease
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "200",
                  color: "#776",
                }}
              >
                tailor your website to fit your brand with our intuitive
                drag-and-drop interface. Make changes in real-time with a few
                simple clicks
              </Typography>

              <Box flexGrow={1} />
              <Btn title="createnow" />
            </Box>
          </Stack>
        </Container>
      </Fade>
    </Box>
  );
}
