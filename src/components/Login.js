import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import '../assets/App.css';
import { connect } from 'react-redux';
import { userLogsIn, userSigningUp } from '../actions/index';

class Login extends React.Component {
  constructor(){
    super();
    // this.state = {
    //   signingUp: false,
    // }
  }

  // renderLoginForm = () => {
  //   console.log("logging in");
  // }

  // renderSignUpForm = () => {
  //   console.log("signing up");
  //   this.setState({
  //     signingUp: true
  //   })
  // }

  //******************************** HOW DO I PASS THE SIGNINGUP STATE TO THIS COMPONENT SO THAT IT RENDERS PROPERLY??

  render(){
    // console.log('hello',this.props);
    return(
      <React.Fragment>
        {(this.props.signingUp === false && this.props.loggedIn === false && this.props.viewingProfile === false && this.props.searching === false) ? (
          <div className="opening-login-page">
            <h1>Welcome to Comedy Kiddo!</h1>
            <Form>
              <Form.Field>
                <label>Email</label>
                <input placeholder='Email' />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input placeholder='Password' type='password'/>
              </Form.Field>
            </Form>
            <Button primary onClick={this.props.userLoggingIn}>Login</Button>
            <br></br>
            -OR-
            <br></br>
            <Button secondary onClick={this.props.userSigningUp}>Sign Up</Button>
          </div>
          ) : (null)
        }
        {(this.props.signingUp === true) ? (
          <div className="opening-login-page">
            <Form onSubmit={this.props.userLoggingIn}>
              <Form.Field>
                <label>Full Name</label>
                <input placeholder='Full Name' />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input placeholder='Email' type='email' />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input placeholder='Password' type='password'/>
              </Form.Field>
              <Form.Field>
                <Checkbox label='Are You A Coach?' />
              </Form.Field>
              <Button primary type='submit'>Submit</Button>
            </Form>
          </div>
          ) : (null)
        }
      </React.Fragment>
      // ANOTHER WAY TO WRITE THE BUTTONS
      // <div>
      //   <Button content='Primary' primary />
      //   <Button content='Secondary' secondary />
      // </div>
    )
  }
}
// ****************************I HAVE NO IDEA WHAT TO PUT HERE? ISN'T THE ACTION ALREADY WRITTEN?
function mapStateToProps(state) {
  // console.log('look at state', state);
  return {
    loggedIn: state.loggedIn,
    signingUp: state.signingUp,
    viewingProfile: state.viewingProfile,
    searching: state.searching,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userLoggingIn: () => {
      dispatch(userLogsIn())
    },
    userSigningUp: () => {
      dispatch(userSigningUp())

    }
  }
}

// ***********************FOR MIKE: DO I NEED TO PUT NULL BELOW IF I AM NOT USING ONE OF THE ABOVE FUNCTIONS? ALSO DO YOU HAVE TO USE TERNARY INSIDE JSX? OR CAN YOU USE IF/ELSE TOO?
export default connect(mapStateToProps, mapDispatchToProps)(Login);
