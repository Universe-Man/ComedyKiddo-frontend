import React from 'react';
import '../assets/App.css';
import { Container, Divider } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { userViewProfile } from '../actions/index';


class Profile extends React.Component {
  constructor(){
    super();
    this.state = {}
  }

  render(){
    return(
      <React.Fragment>
        {(this.props.viewingProfile === true) ? (
          <div id='Profile'>
            <Container textAlign='left'>
              <h1>Full Name</h1>
            </Container>
            <Container textAlign='right'>
              <img src="https://epss.ucla.edu/media/images/profile_pictures/default.jpg" id="profile-pic"/>
            </Container>
            <Container textAlign='left'>
              <h3>Email</h3>
            </Container>
            <Container textAlign='left'>
              <h3>Teams</h3>
            </Container>
            <Container textAlign='center'>
              <h3>Shows</h3>
            </Container>
            <Container textAlign='right'>
              <h3>Notes</h3>
            </Container>
          </div>
          ) : (null)
        }
      </React.Fragment>

    )
  }
}

export default Profile;
