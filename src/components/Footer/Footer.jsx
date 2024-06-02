import { Box, Container, Stack, Typography } from "@mui/material";
import Btn from "../../compon/Btn";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


export default function Footer() {
  return (
    <Box sx={{bgcolor:"#21212b"}}>
   <Container>
    <Stack direction={{sm:"column",md:"row"}} sx={{justifyContent:"space-between",alignItems:"center",py:7, borderBottom: 2,borderColor: "#fff",}}>
    <Typography  sx={{
             
              p: "3px 10px",
              fontSize: "40px",
              color: "#fff",
              
            }}
            variant="body2">
    Ready Start Free Trail to Take your next step ?

    </Typography>
    <Btn title="Start Free " width="200px" />
    </Stack>
    <Stack direction={{sm:"column",md:"row"}}  >
      <List  sx={{ width: '100%', maxWidth: 360, py:4, color:"#fff"}}>
      <ListItem>
       
        <ListItemText primary="Home"  />
      </ListItem>
      <ListItem>
        
        <ListItemText primary="Work"  />
      </ListItem>
      <ListItem>
        
        <ListItemText primary="Vacation"  />
      </ListItem>
      <ListItem>
        
        <ListItemText primary="theme"  />

      </ListItem>
    </List>
    <List sx={{ width: '100%', maxWidth: 360, py:4, color:"#fff"}}>
      <ListItem>
       
        <ListItemText primary="About"  />
      </ListItem>
      <ListItem>
        
        <ListItemText primary="Contact"  />
      </ListItem>
      <ListItem>
        
        <ListItemText primary="blog"  />
      </ListItem>
      <ListItem>
        
        <ListItemText primary=" Documentation"  />

      </ListItem>
    </List>
    <List sx={{ width: '100%', maxWidth: 360, py:4, color:"#fff"}}>
      <ListItem>
       
        <ListItemText primary="Email: info@example.com"  />
      </ListItem>
      <ListItem>
        
        <ListItemText primary="Phone: +8 (823) 456-7890"  />
      </ListItem>
      <ListItem>
        
        <ListItemText primary="Address: 823 Main Street,Anytown, USA"  />
      </ListItem>
      <ListItem>
        
        <ListItemText primary="FAQ"  />

      </ListItem>
    </List>
    </Stack>
    
   </Container>
   </Box>
  )
}
