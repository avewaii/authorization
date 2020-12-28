import React, { useState } from 'react';
import {Grid, Paper, Avatar, Button, Typography, Link} from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';
import axios from 'axios';
const crypto = require('crypto');

const Authorization = () => {
   
    let [userData, setUserData] = useState({});

    //{headers: {"Authorisation": "REPLACE_BY_ACTUAL_SESSION"}}
    

    function submitForm(e) {

        console.log(userData);

        axios.post('api/users/login', userData)
            .then((response) => {
                console.log('resp:', response);
                //response.data.session - session
            })
            .catch((error) => {
                console.log(error);
            });
            e.preventDefault();
    }
   

    const paperStyle = {
       padding: '30px',
       margin: '20px auto',
       height: '70vh',
       width: '280px',
   }

   const buttonStyle = {
       margin: '20px auto',
       backgroundColor: 'red'
   }
   
    return (
        <Grid>
            <Paper elevation={3} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={{backgroundColor: 'red'}}>
                        <FavoriteIcon style={{color: 'white'}}/>
                    </Avatar>
                    <h2>Sign in</h2>

                    <form onSubmit={submitForm} action='/sessions' method='post'>
                        <input onChange={(e) => setUserData({...userData, [e.target.name]: e.target.value})} label='Email' name='email' type='' placeholder='Enter your email' required/>
                        <input onChange={(e) => setUserData({...userData, [e.target.name]: e.target.value})} label='Password' name='password' type='password' placeholder='Enter your password' required/>                    
                        <Button onClick={(e) => setUserData({...userData, status: 'avaliable'})} type='submit' style={buttonStyle} variant='contained' size='large' color='primary' fullWidth>Sign in</Button>     
                    </form>
                </Grid>
                <Typography>Do you have an account?<br/>
                <Link href='/registration' style={{color: 'red'}}>Sign up</Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Authorization;
