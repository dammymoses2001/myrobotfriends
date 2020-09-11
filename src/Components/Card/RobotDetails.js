import React, { Component, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Navigation from './Navigation'



const style ={
  img :{
    width:'auto',
    height:300,
    marginTop:40,
  },
  style:{
    height:400,
    padding:40,
    margin:20
  },
  text:{
    marginTop:20
  }
}





class RobotDetails extends Component{
  
    render(){
        const {robotDetails:{id,name,email,body,username},back} = this.props
        return(
      
          <Fragment>
             <Navigation back={back}/>
             {console.log(back)}
               <Container maxWidth="md">
            <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
        <img alt ="robotpic" src={`https://robohash.org/${id}?size=200x200`} style={style.img}/> 
        </Grid>
        <Grid item xs={12} sm={8}>
          <Paper style={style.style}>
            <Typography variant="h3" className="title" style={style.text}>
            {name ? name : 'Somwent Wrong'}
            </Typography>
            <Typography variant="h4" className="name" style={style.text}>
            {username}
            </Typography>
            <Typography variant="h5" className="email" style={style.text}>
            {email}
            </Typography>
            <Typography className="body" style={style.text}>
            {body}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      </Container>
          </Fragment>
        )
    }
}
export default RobotDetails;