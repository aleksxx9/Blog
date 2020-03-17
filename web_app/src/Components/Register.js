import React from "react";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Avatar, TextField, Typography, Button, Grid, Link, Tooltip } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Field, reduxForm } from 'redux-form'
import validate from "./FormValidation/validate"
import asyncValidate from "./FormValidation/asyncValidate"
import WarningSharpIcon from '@material-ui/icons/WarningSharp';
import InputAdornment from '@material-ui/core/InputAdornment';
import MuiAlert from '@material-ui/lab/Alert';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useSelector, connect } from 'react-redux';
import { setSuccessMessage, removeSuccessMessage } from '../actions';
import CircularProgress from '@material-ui/core/CircularProgress';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const renderField = ({ input, label, meta: { asyncValidating, invalid, touched, error }, ...custom }) => (

  < div >
    <div>
      <TextField
        InputProps={
          !asyncValidating && touched && invalid && error ?
            {
              endAdornment: (
                <InputAdornment>
                  <Tooltip title={<span style={{ fontSize: "15px" }}>{touched && error}</span>} style={{ width: '120px', fontSize: "50px", backgroundColor: "blue" }}>
                    <WarningSharpIcon style={{ color: "red" }} />
                  </Tooltip>
                </InputAdornment>
              )
            }
            : asyncValidating ? {
              endAdornment: (
                <CircularProgress color="secondary" />
              )
            } : !asyncValidating && !error && touched ?
                {
                  endAdornment: (
                    <DoneIcon style={{ color: "green" }} />
                  )
                } : {}
        }

        id={input.name}
        style={{ margin: "10px 0px" }}
        variant="outlined"
        fullWidth
        label={label}
        placeholder={label}
        error={error && touched && invalid}
        required
        {...input}
        {...custom}
      />
    </div>
  </div >
)

const clearFields = (result, dispatch, props) => {
  props.reset('asyncValidation');
  props.dispatch(setSuccessMessage());
}

const removeSuccess = (dispatch, result, ...props) => {
  props[1].dispatch(removeSuccessMessage());
}


let SignUp = (props) => {
  const showSuccessMessage = useSelector(state => state.showSuccessMessage);
  const classes = useStyles();
  const { handleSubmit, submitting } = props
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <Grid container spacing={matches ? 2 : 0}>
            <Grid item xs={12} sm={6}>
              <Field name="firstName" type="text" component={renderField} label="First Name" autoComplete="fname" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field name="lastName" type="text" component={renderField} label="Last Name" />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Field name="email" type="email" component={renderField} label="Email " />
            <Field name="password" type="password" component={renderField} label="Password" />
            <Field name="repeatPassword" type="password" component={renderField} label="Repeat Password" />
            {showSuccessMessage ?
              <Alert severity="success">
                Success
              </Alert>
              : ''}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={submitting}
            >
              Sign Up
          </Button>
          </Grid>
          <Grid justify="flex-end" container>
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container >
  )
}

SignUp = reduxForm({
  form: 'asyncValidation', // a unique identifier for this form
  onSubmitSuccess: clearFields,
  onSubmitFail: removeSuccess,
  validate,
  asyncValidate,
  asyncBlurFields: ['email']
})(SignUp)

SignUp = connect(state => ({
  showSuccessMessage: state.showSuccessMessage
}))(SignUp)

export default SignUp