import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

const loginSytle = makeStyles((theme) => ({
    main: {
        display: "flex",
        justifyContent: "center",
        fontSize: "15px",
      },
      page: {
        width: "35%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      container: {
        margin: '5%',
          },
      inlineTitle: {
        display: "flex",
        flexDirection: "row",
        fontSize: '25px',
       },
       signIn:{
           fontSize: "1.5em"
       },
       inputField: {
           margin: '1%'
       },
      
       inputField:{
           width:"80%",
           margin: "2%"
       },
       button: {
           alignSelf: "flex-end",
           margin: "9%"
       }
     
}));
export default function SimplePaper() {
    const classes = loginSytle();
  
    return (
       <div className={classes.main}>
           <Paper elevation={2} className={classes.page}>
           <div className={classes.container}>
           <span className={classes.inlineTitle}>
            <b>
          <font color='#1976d2'>F</font>
          <font color='#e53935'>u</font>
          <font color='#ffb74d'>n</font>
          <font color='#1976d2'>d</font>
          <font color='#388e3c'>o</font>
          <font color='#e53935'>o</font>
          </b>
           </span>
          <span className={classes.signIn}>Sign in</span>
        </div>
        <form className={classes.form}>
          <TextField  className={classes.inputField}
            label="Email or Phone"
            variant="outlined"
          />
          <TextField  id='password' className={classes.inputField}
            label="Password"
            type="password"
            variant="outlined"
          />
          </form>
          <Button variant="contained" className={classes.button} color="primary">
       Sign In
      </Button>
           </Paper>
       </div>
    );
}
    