import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import './signup.css'
import AccImg from '../assets/account.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  page: {
    width: "60%",
    display: "flex",
    flexDirection: "column",
  },
  container:{
    display: 'flex',
    flexDirection: "row",
    justifyContent: "center",
  },
  regImg: {
    width: "35%",
  },
  form: {
    margin: '7%',
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    width: '50%'
  },
  inlineTitle: {
    display: "flex",
    flexDirection: "row",
    fontSize: '30px',
   },
  headerText:{
    fontFamily: 'Google Sans',
    fontSize: '3ch',
    marginBottom: "2%"
  },
  inputs: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center"
  },
  inputField: {
    margin: theme.spacing(1), 
    width: "45%" 
  },
  showPass: {
    width: '6%'
  },
  userNameField: {
    margin: theme.spacing(1),
    width: "100%"
  },
  lineContainer:{
    display: 'flex',
    flexDirection: "row"
  },
  nextButton:{
    width: "12%",
    marginBottom: "5%",
    alignSelf: "center",
  }
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={2} className={classes.page}>
        <div className={classes.container}>
        <form className={classes.form}>
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
          <div className={classes.headerText}>Create your Fundoo Account </div>
          <div className={classes.inputs}>
          <TextField size='small' className={classes.inputField}
            label="First Name"
            variant="outlined"
          />
            <TextField size='small' className={classes.inputField}
            label="Last Name"
            variant="outlined"
          />
          </div>
          <div className={classes.inputs}>
          <TextField size='small' className={classes.userNameField}
            label="Username"
            variant="outlined"
          />
          </div>
          <div className={classes.inputs}>
          <TextField size='small' id='password' className={classes.inputField}
            label="Password"
            type="password"
            variant="outlined"
          />
            <TextField size='small' id='password' className={classes.inputField}
            label="Confirm"
            type="password"
            variant="outlined"
          />
        </div>
        <span className={classes.inputs}>
        <Checkbox defaultChecked id='passCheck' color="primary" className={classes.showPass}  />
        Show Password
         </span>
        </form>
        <img className={classes.regImg} src={AccImg} alt=""/>
        </div>
        <Button variant="contained" className={classes.nextButton} color="primary">
        Next
      </Button>
     
      </Paper>
    </div>
  );
}
