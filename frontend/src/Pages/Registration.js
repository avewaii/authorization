import React, { useState } from 'react';
import {Grid, Paper, Avatar, Button, Typography, Link} from '@material-ui/core'
import LockIcon from '@material-ui/icons/Lock';
import axios from 'axios';
const crypto = require('crypto');


const Registration = () => {
   
   let [userData, setUserData] = useState({});

    function submitForm(e) {

        axios.post('api/users/register', userData, {headers: {"Authorisation": "REPLACE_BY_ACTUAL_SESSION"}})
            .then((response) => {
                console.log(response);
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
                        <LockIcon style={{color: 'white'}}/>
                    </Avatar>
                    <h2>Sign up</h2>

                    <form onSubmit={submitForm}>
                        <input onChange={(e) => setUserData({...userData, [e.target.name]: e.target.value})} label='Username' name='name' type='' placeholder='Enter your name' required/>
                        <input onChange={(e) => setUserData({...userData, [e.target.name]: e.target.value})} label='Email' name='email' type='' placeholder='Enter your email' required/>
                        <input onChange={(e) => setUserData({...userData, [e.target.name]: e.target.value})} label='Password' name='password' type='password' placeholder='Enter your password' required/>                    
                        <Button onClick={(e) => setUserData({...userData, status: 'avaliable'})} type='submit' style={buttonStyle} variant='contained' size='large' color='primary' fullWidth>Sign up</Button>     
                    </form>
                </Grid> 
                <Typography>Do you have an account?<br/>
                <Link href='/' style={{color: 'red'}}>Sign in</Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Registration;