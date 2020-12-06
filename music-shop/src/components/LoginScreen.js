import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

    const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      
    //   width: '25ch',
    },
  },
}));


const LoginScreen =()=>{



  const classes = useStyles();

    return(
        <>
            <div className="login__container">
            <div className="login__title">
                Sign in
            </div>

            <form>
                <TextField className={classes.root} style={{color: green}}id="outlined-basic" label="E-mail" variant="outlined" />
                <TextField className={classes.root} id="outlined-basic" label="Password" variant="outlined" />
            </form>
            </div>
           
        </>

    );
}

export {LoginScreen}