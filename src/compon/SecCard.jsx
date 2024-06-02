
import { Stack } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
export default function SecCard(props) {
  return (
   
       
    
    <Stack sx={{justifyContent:"space-between", }}
     direction={{ sm: "column", lg: "row", }}>
    
    <Card sx={{width:300,my:4, textAlign:"center",mx:3,boxShadow: 3,borderRadius: '16px',height:500  ,"&:hover": {
      translate:"5px",
      zoom:1.15,
     }}} >
    <CardMedia
      sx={{ minHeight:150,justifyContent:"center",borderRadius:"50%",py:10}}
      image={props.image}
    />
    <CardContent>
      <Typography sx={{fontSize:"25px" ,color:"#69a5a4"}} gutterBottom variant="h5" component="div">
        {props.name}
      </Typography>
      <Typography sx={{fontSize:"20px"}} variant="body2" color="text.secondary">
        {props.direction}
      </Typography>
    </CardContent>
    <CardActions sx={{justifyContent:"center",}}>
      <Button ><FacebookOutlinedIcon /></Button>
      <Button ><SubscriptionsOutlinedIcon/></Button>
      <Button ><CallOutlinedIcon/></Button>
    </CardActions>
  </Card>
  
  </Stack>
  
  );
}
