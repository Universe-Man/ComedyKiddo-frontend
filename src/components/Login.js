import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import '../App.css';

class Login extends React.Component {
  constructor(){
    super();
    this.state = {
      // signingUp: false,
    }
  }



  render(){
    return(
      <div id="opening-login-page">
        <h1>Welcome to Comedy Kiddo!</h1>
        {(this.props.state.loggingIn === true) ? (
          <React.Fragment>
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
            <Button primary onClick={this.props.renderLoginForm}>Login</Button>
            <br></br>
            -OR-
            <br></br>
            <Button secondary onClick={this.props.renderSignUpForm}>Sign Up</Button>
          </React.Fragment>
          ) : (null)
        }
        {(this.props.state.signingUp === true) ? (
          <React.Fragment>
            <Form>
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
          </React.Fragment>
          ) : (null)}




      </div>
      // ANOTHER WAY TO WRITE THE BUTTONS
      // <div>
      //   <Button content='Primary' primary />
      //   <Button content='Secondary' secondary />
      // </div>
    )
  }
}

export default Login;
