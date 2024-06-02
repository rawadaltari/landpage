import React from 'react'
import { Button} from "@mui/material";
export default function Btn(props) {
  return (
    <Button size="large" 
    sx={{
      color: "#fff",
      bgcolor: "#000",
      
      mt:4,
      mb:2,
      "&:hover": {
        color: "#eab676",
        bgcolor: "#001",
      },
    }}
  >
{props.title}
</Button>
  )
}
