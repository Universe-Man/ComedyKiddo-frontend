import React from 'react';
import { Button, Checkbox, Form, Message } from 'semantic-ui-react'
import '../assets/App.css';
import { connect } from 'react-redux';
import { userLogsIn, userSigningUp, userLoginError, userSignUpError, createNewUser, cancelCreateNewUser } from '../actions/index';
import { userURL, teamURL, showURL } from '../containers/GodContainer';


class Login extends React.Component {
  constructor(){
    super();
    this.state = {
      loginEmail: "",
      loginPassword: "",
      coachChecked: false,
      signUpName: "",
      signUpEmail: "",
      signUpPassword: "",
    }
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

  handleLogin = () => {
    // fetch
    // body => JSON.strignigy(state)
    // .then

    // to fake:
    // createToken => ;dfs;lafj;adfjs;fj
    let currentUserLoginInfo = {
      email: this.state.loginEmail,
      password: this.state.loginPassword
    }
    // console.log(currentUserLoginInfo);
    let currentUser =
      this.props.allUsers.find(user => {
        return user.email === currentUserLoginInfo.email && user.password === currentUserLoginInfo.password
      })
    if (currentUser === undefined) {
      currentUser = {};
      this.props.userLoggingInError()
    } else {
    // console.log(currentUser)
    this.props.userLoggingIn(currentUser)
    currentUser = {};
    this.setState({
      loginEmail: "",
      loginPassword: "",
    })
    }
  }

  handleSignUp = () => {
    let currentUserSignUpInfo = {
      name: this.state.signUpName,
      email: this.state.signUpEmail,
      password: this.state.signUpPassword,
      coach: this.state.coachChecked,
      teams: [],
      shows: [],
      notes: [],
      img_src: "",
      source: "user"
    }
    let existingUser =
      this.props.allUsers.find(user => {
        return user.email === currentUserSignUpInfo.email
      })
    if (existingUser !== undefined) {
      this.props.userSigningUpError()
    } else {
      fetch(userURL, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(currentUserSignUpInfo)
      })
      .then(res => res.json())
      .then(json => this.props.userCreatingNewAccount(json))
    }
  }

  getLoginEmail = (event) => {
    this.setState({
      loginEmail: event.target.value
    })
  }

  getLoginPassword = (event) => {
    this.setState({
      loginPassword: event.target.value
    })
  }

  getSignUpName = (event) => {
    this.setState({
      signUpName: event.target.value,
    })
  }

  getSignUpEmail = (event) => {
    this.setState({
      signUpEmail: event.target.value
    })
  }

  getSignUpPassword = (event) => {
    this.setState({
      signUpPassword: event.target.value
    })
  }

  isSignUpCoach = () => {
    this.setState({
      coachChecked: !this.state.coachChecked
    })
  }

  render(){

    return(
      <React.Fragment>
        {(this.props.signingUp === false && this.props.loggedIn === false && this.props.viewingProfile === false && this.props.searching === false && this.props.loginError === false && this.props.signUpError === false) ? (
          <div className="opening-login-page">
            <h1>Welcome to Comedy Kiddo!</h1>
            <Form>
              <Form.Field>
                <label>Email</label>
                <input onChange={this.getLoginEmail} placeholder='Email' autoFocus='autofocus' />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input onChange={this.getLoginPassword} placeholder='Password' type='password'/>
              </Form.Field>
            </Form>
            <br></br>
            <Button primary onClick={this.handleLogin}>Login</Button>
            <br></br>
            -OR-
            <br></br>
            <Button secondary onClick={this.props.userSigningUp}>Sign Up</Button>
          </div>
          ) : (null)
        }

        {(this.props.loginError === true && this.props.signingUp === false) ? (
          <div className="opening-login-page">
            <h1>Welcome to Comedy Kiddo!</h1>
            <Form error>
              <Message
                error
                header='Account Not Recognized'
                content='Please make sure your email and/or password are correct.'
                />
              <Form.Field>
                <label>Email</label>
                <input onChange={this.getLoginEmail} placeholder='Email' autoFocus='autofocus' value={this.state.loginEmail} />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input onChange={this.getLoginPassword} placeholder='Password' type='password' value={this.state.loginPassword}/>
              </Form.Field>
            </Form>
            <Button primary onClick={this.handleLogin}>Login</Button>
            <br></br>
            -OR-
            <br></br>
            <Button secondary onClick={this.props.userSigningUp}>Sign Up</Button>
          </div>
        ) : (null)}

        {(this.props.signingUp === true && this.props.signUpError === false) ? (
          <div className="opening-login-page">
            <h1>Welcome to Comedy Kiddo!</h1>
            <Form onSubmit={this.handleSignUp}>
              <Form.Field>
                <label>Full Name</label>
                <input placeholder='Full Name' onChange={this.getSignUpName} autoFocus="autofocus" />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input placeholder='Email' onChange={this.getSignUpEmail} type='email' />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input placeholder='Password' onChange={this.getSignUpPassword} type='password'/>
              </Form.Field>
              <Form.Field>
                <Checkbox label='Are You A Coach?' checked={this.state.coachChecked} onClick={this.isSignUpCoach}/>
              </Form.Field>
              <Button primary type='submit'>Submit</Button>
              <Button secondary onClick={this.props.userCancelsCreatingNewAccount} >Cancel</Button>
            </Form>
          </div>
          ) : (null)
        }


        {(this.props.signUpError === true) ? (

          <div className="opening-login-page">
            <h1>Welcome to Comedy Kiddo!</h1>
            <Form error onSubmit={this.handleSignUp}>
              <Message
                error
                header='Account Already Exists'
                content='Please login to this existing account, or select a new email address.'
                />
              <Form.Field>
                <label>Full Name</label>
                <input placeholder='Full Name' onChange={this.getSignUpName} autoFocus="autofocus" value={this.state.signUpName} />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input placeholder='Email' onChange={this.getSignUpEmail} value={this.state.signUpEmail} type='email' />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input placeholder='Password' onChange={this.getSignUpPassword} value={this.state.signUpPassword} type='password'/>
              </Form.Field>
              <Form.Field>
                <Checkbox label='Are You A Coach?' checked={this.state.coachChecked}  onClick={this.isSignUpCoach}/>
              </Form.Field>
              <Button primary type='submit'>Submit</Button>
              <Button secondary onClick={this.props.userCancelsCreatingNewAccount} >Cancel</Button>
            </Form>
          </div>

        ) : (null)}



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
    loginError: state.loginError,
    signUpError: state.signUpError,
    viewingProfile: state.viewingProfile,
    searching: state.searching,
    allUsers: state.allUsers,
    currentUser: state.currentUser,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userLoggingIn: (currentUser) => {
      dispatch(userLogsIn(currentUser))
    },
    userSigningUp: () => {
      dispatch(userSigningUp())
    },
    userLoggingInError: () => {
      dispatch(userLoginError())
    },
    userSigningUpError: () => {
      dispatch(userSignUpError())
    },
    userCreatingNewAccount: (newUserAndCo) => {
      dispatch(createNewUser(newUserAndCo))
    },
    userCancelsCreatingNewAccount: () => {
      dispatch(cancelCreateNewUser())
    }
  }
}

// ***********************FOR MIKE: DO I NEED TO PUT NULL BELOW IF I AM NOT USING ONE OF THE ABOVE FUNCTIONS? ALSO DO YOU HAVE TO USE TERNARY INSIDE JSX? OR CAN YOU USE IF/ELSE TOO?
export default connect(mapStateToProps, mapDispatchToProps)(Login);
