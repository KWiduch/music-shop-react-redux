import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles, } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import {Formik,Form, ErrorMessage,useFormik} from "formik";
import {signInSchema} from "./Validation"
import { Button } from '@material-ui/core';

    const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      
      // width: '25ch',
    },
  },
}));


const LoginScreen =()=>{

  const classes = useStyles();

    return(
        <>
        <Formik initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          age: "",
        }}
        validationSchema={signInSchema}
        onSubmit={(fields)=>{
          console.log(fields)
        }}
        > 
        <div className="login__container">
        <div className="login__title">Sign In</div>
        <Form>
        <TextField className={classes.root} style={{color: green}}id="outlined-basic" label="E-mail" variant="outlined" />
        <ErrorMessage 
        name="email"
        component="div"
        className="invalid-feedback"
        style={{color: "red", display: "flex",justifyContent:"Center",fontWeight:"bold"}}
        />
        <TextField className={classes.root} id="outlined-basic" label="Password" variant="outlined" />
        <ErrorMessage 
        name="password"
        component="div"
        className="invalid-feedback"
        style={{color: "red", display: "flex",justifyContent:"Center",fontWeight:"bold"}}
        />
        <div className="login_button"><button>Sign In</button></div>
        <div className="login__info">dont have account? Create one</div>
        </Form>
         </div>
        </Formik>
        </>

    );
}

export {LoginScreen}