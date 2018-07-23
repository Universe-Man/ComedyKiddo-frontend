import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import '../assets/App.css';

class Login extends React.Component {
  constructor(){
    super();
    this.state = {
      signingUp: false,
    }
  }

  renderLoginForm = () => {
    console.log("logging in");
  }

  renderSignUpForm = () => {
    console.log("signing up");
    this.setState({
      signingUp: true
    })
  }

  render(){
    return(
      <div id="opening-login-page">
        <h1>Welcome to Comedy Kiddo!</h1>
        {(this.state.signingUp === false) ? (
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
            <Button primary onClick={this.renderLoginForm}>Login</Button>
            <br></br>
            -OR-
            <br></br>
            <Button secondary onClick={this.renderSignUpForm}>Sign Up</Button>
          </React.Fragment>
          ) : (
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
          )
        }


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
