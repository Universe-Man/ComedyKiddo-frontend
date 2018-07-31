import React from 'react';
import '../assets/App.css';
import { Container, Divider, Button, Form, Message, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { userViewProfile, editProfile, editTeams, editShows, editNotes, displayTeams, displayShows, displayNotes, createNewTeam, createNewShow, createNewNote, cancelEditProfile, cancelCreateNewTeam, cancelCreateNewShow, cancelCreateNewNote, completeEditProfile, editProfileError, getAllUsers, getAllTeams, getAllShows, logOutFromDelete, completeCreateNewTeam, completeCreateNewShow } from '../actions/index';
import ListItem from '../components/ListItem';
import { userURL, teamURL, showURL } from '../containers/GodContainer';


class Profile extends React.Component {
  constructor(){
    super();
    this.state = {
      editProfileName: "",
      editProfileEmail: "",
      editProfilePic: "",
      coachChecked: false,
      deleteWarningOpen: false,
      newTeamName: "",
      newShowName: "",
      newShowLocation: "",
    }
  }




  componentWillReceiveProps(){
    if (this.props.profileBeingViewed !== undefined) {
      this.setState({
        coachChecked: this.props.profileBeingViewed.coach
      })
    }
    // fetch(userURL)
    //   .then(res => res.json())
    //   .then(json => this.props.gettingAllTheUsers(json))
  }

  handleEditProfileSubmit = () => {
    let editedUser = {
      name: this.state.editProfileName,
      email: this.state.editProfileEmail,
      img_src: this.state.editProfilePic,
      coach: this.state.coachChecked
    }
    let tempEditedUser = {
      name: this.state.editProfileName,
      email: this.state.editProfileEmail,
      password: this.props.currentUser.password,
      coach: this.state.coachChecked,
      img_src: this.state.editProfilePic,
      source: "user"
    }
    let tempAllUsers = [...this.props.allUsers]
    let userToReplace = tempAllUsers.find(user => {
      return user.email === this.props.currentUser.email
    })
    let toRemoveIndex = tempAllUsers.indexOf(userToReplace)
    // console.log('tempAllUsers', tempAllUsers);
    tempAllUsers.splice(toRemoveIndex, 1, tempEditedUser)
    // console.log('tempAllUsers after splice', tempAllUsers);
    let existingUser =
      this.props.allUsers.find(user => {
        return user.email === editedUser.email
      })
      if (existingUser !== undefined) {
        this.props.userEditingProfileError()
      } else {
        fetch(`${userURL}/${this.props.currentUser.id}`, {
          method: "PATCH",
          mode: "cors",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedUser)
        })
        .then(res => res.json())
        .then(json => this.props.userOfficiallyEditsProfile(json, tempAllUsers))
        // .then(fetch(userURL)
        //   .then(res => res.json())
        //   .then(json => this.props.gettingAllTheUsers(json)))

      }
  }

  warnDeleteProfile = () => {
    this.setState({
      deleteWarningOpen: !this.state.deleteWarningOpen
    })
  }

  finalAnswerDeleteProfile = () => {
    let tempAllUsers = [...this.props.allUsers]
    let userToKill = tempAllUsers.find(user => {
      return user.email === this.props.currentUser.email
    })
    let toRemoveIndex = tempAllUsers.indexOf(userToKill)
    tempAllUsers.splice(toRemoveIndex, 1)
    fetch(`${userURL}/${this.props.currentUser.id}`, {
      method: "DELETE"
    })
    this.warnDeleteProfile()
    this.props.userLoggingOutFromDelete(tempAllUsers)
  }


  handleClickCreateNewTeam = () => {
    let newTeam = {
      name: this.state.newTeamName,
      users: [this.props.currentUser],
      shows: [],
      source: "team"
    }
    let updateUser = {...this.props.currentUser}
    updateUser.teams.push(newTeam)
    let tempAllTeams = [...this.props.allTeams]
    tempAllTeams.push(newTeam)
    fetch(teamURL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTeam)
    })
    .then(res => res.json())
    .then(json => this.props.userOfficiallyCreatesTeam(json, tempAllTeams))
    .then(
      fetch(`${userURL}/${this.props.currentUser.id}`, {
        method: "PATCH",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updateUser)
      })
    )
  }

  handleClickCreateNewShow = () => {
    let newShow = {
      name: this.state.newShowName,
      location: this.state.newShowLocation,
      users: [this.props.currentUser],
      teams: [],
      source: "show"
    }
    let tempAllShows = [...this.props.allShows]
    console.log("tempAllShows before push", tempAllShows);
    tempAllShows.push(newShow)
    console.log("tempAllShows after push", tempAllShows);

    fetch(showURL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newShow)
    })
    .then(res => res.json())
    .then(json => this.props.userOfficiallyCreatesShow(json, tempAllShows))
  }

  editUserName = (event) => {
    this.setState({
      editProfileName: event.target.value
    })
  }

  editUserEmail = (event) => {
    this.setState({
      editProfileEmail: event.target.value
    })
  }

  editUserPic = (event) => {
    this.setState({
      editProfilePic: event.target.value
    })
  }

  toggleUserCoach = () => {
    this.setState({
      coachChecked: !this.state.coachChecked
    })
  }

  getNewTeamName = (event) => {
    this.setState({
      newTeamName: event.target.value
    })
  }

  getNewShowName = (event) => {
    this.setState({
      newShowName: event.target.value
    })
  }

  getNewShowLocation = (event) => {
    this.setState({
      newShowLocation: event.target.value
    })
  }


render(){
  console.log("THIS IS THE CURRENT USER", this.props.currentUser);

  console.log('STATE OF PROFILE', this.state);
  console.log('STORE OF PROFILE', this.props);

  let teams
  if (this.props.profileBeingViewed.teams !== undefined) {
    teams = this.props.profileBeingViewed.teams.map(team => {
      console.log('teams', team);
      return ( <ListItem team={team} id={`${team.source}-${team.id}`} key={`${team.source}-${team.id}`}/> )
    })
  } else {
    teams = [];
  }
  let shows
  console.log("profile's shows", this.props.profileBeingViewed);
  if (this.props.profileBeingViewed.shows !== undefined) {
    shows = this.props.profileBeingViewed.shows.map(show => {
      // console.log('shows', show);
      return ( <ListItem show={show} id={`${show.source}-${show.id}`} key={`${show.source}-${show.id}`}/> )
    })
  } else {
    shows = [];
  }
  // let notes
  // if (this.props.profileBeingViewed.notes !== undefined) {
  //   notes = this.props.profileBeingViewed.notes.map(note => {
  //     // console.log('notes', note);
  //     return ( <ListItem note={note} id={note.id} key={note.id}/> )
  //   })
  // } else {
  //   notes = [];
  // }
    // console.log("the current profile?", this.props.profileBeingViewed);
    // console.log("editing profile?", this.props.editingProfile);
    // console.log("CONCENTRATED GOD STATE", this.props);
    return(

          <React.Fragment>
            {(this.props.viewingProfile === true) ? (
              <div id='Profile'>


                <Container textAlign='left'>
                  <h1>{this.props.profileBeingViewed.name}</h1>
                </Container>
                <Container textAlign='center'>
                  <Button onClick={this.props.userEditingProfile}>Edit Profile</Button>
                </Container>
                <Container textAlign='right'>
                  <img src="https://epss.ucla.edu/media/images/profile_pictures/default.jpg" id="profile-pic"/>
                </Container>
                <Container textAlign='left'>
                  <h3>{this.props.profileBeingViewed.email}</h3>
                </Container>



                <Container textAlign='left'>
                  <Button onClick={this.props.userDisplaysTeams}>Teams</Button>
                  <h3>teams</h3>
                </Container>
                <Container textAlign='center'>
                  <Button onClick={this.props.userDisplaysShows}>Shows</Button>
                  <h3>shows</h3>
                </Container>

  {/*}  // **************************************************
    // TEMPORARILY CUTTING NOTES FROM PROJECT AS ONLY USERS HAVE THEM AND THEY ARE SHARED IN THE SAME PROFILE FOR NOW!!
    // **************************************************

                // <Container textAlign='right'>
                //   {(this.props.profileBeingViewed.notes) ? (
                //     <React.Fragment>
                //       <Button onClick={this.props.userDisplaysNotes}>Notes</Button>
                //       <h3>notes</h3>
                //     </React.Fragment>
                //   ) : (null)}
                // </Container> */}


                {(this.props.editingProfile === true && this.props.editingProfileError === false) ? (
                  <Form>
                    <Form.Group widths='equal'>
                      <Form.Input fluid label='Full Name' placeholder='Full Name' autoFocus='autofocus' onChange={this.editUserName} />
                      <Form.Input fluid label='Email' placeholder='Email' onChange={this.editUserEmail} />
                      <Form.Input fluid label='Upload Profile Picture' placeholder='Upload Profile Picture' onChange={this.editUserPic} />
                      <Form.Checkbox label='Are You A Coach?' checked={this.state.coachChecked} onClick={this.toggleUserCoach} />
                    </Form.Group>
                    <Form.Button primary onClick={this.handleEditProfileSubmit}>Save</Form.Button>
                    <Form.Button secondary onClick={this.props.userCancelsEditProfile}>Cancel</Form.Button>
                    <Form.Button color='red' onClick={this.warnDeleteProfile} >Delete Profile</Form.Button>
                  </Form>
                ) : (null)}



                {(this.props.editingProfileError === true) ? (
                  <Form error>
                    <Message
                      error
                      header='Account Already Exists'
                      content='An Account with this Email Address Already Exists.'
                      />
                    <Form.Group widths='equal'>
                      <Form.Input fluid label='Full Name' placeholder='Full Name' autoFocus='autofocus' onChange={this.editUserName} />
                      <Form.Input fluid label='Email' placeholder='Email' onChange={this.editUserEmail} />
                      <Form.Input fluid label='Upload Profile Picture' placeholder='Upload Profile Picture' onChange={this.editUserPic} />
                      <Form.Checkbox label='Are You A Coach?' checked={this.state.coachChecked} onClick={this.toggleUserCoach} />
                    </Form.Group>
                    <Form.Button primary onClick={this.handleEditProfileSubmit}>Save</Form.Button>
                    <Form.Button secondary onClick={this.props.userCancelsEditProfile}>Cancel</Form.Button>
                    <Form.Button color='red' onClick={this.warnDeleteProfile} >Delete Profile</Form.Button>
                  </Form>
                ) : (null)}




                  <Modal
                    open={this.state.deleteWarningOpen}
                  >
                    <Modal.Header>Delete Your Account</Modal.Header>
                    <Modal.Content>
                      <p>Are you sure you want to delete your account</p>
                    </Modal.Content>
                    <Modal.Actions>
                      <Button negative onClick={this.warnDeleteProfile}>
                        No
                      </Button>
                      <Button
                        positive
                        labelPosition='right'
                        icon='checkmark'
                        content='Yes'
                        onClick={this.finalAnswerDeleteProfile}
                      />
                    </Modal.Actions>
                  </Modal>







            <div id='UserTeams'>
                {(this.props.displayTeams === true) ? (
                  <React.Fragment>
                    <div id='profile-teams-list'>
                      All User's Teams
                      {teams}
                    </div>
                    <Button primary onClick={this.props.userCreatingNewTeam}>Create New Team</Button>
                  </React.Fragment>
                    ) : (null)}
              {(this.props.createTeam === true) ? (
                <Form>
                  <Form.Group widths='equal'>
                    <Form.Input fluid label='Team Name' placeholder='Team Name' autoFocus="autofocus" onChange={this.getNewTeamName} />
                  </Form.Group>
                  <Form.Button primary onClick={this.handleClickCreateNewTeam} >Save</Form.Button>
                  <Form.Button secondary onClick={this.props.userCancelsCreatingNewTeam} >Cancel</Form.Button>
                </Form>
              ) : (null)}
            </div>

                <div id='UserShows'>
                    {(this.props.displayShows === true) ? (
                      <React.Fragment>
                        <div id='profile-shows-list'>
                          All User's Shows
                          {shows}
                        </div>
                        <Button primary onClick={this.props.userCreatingNewShow}>Create New Show</Button>
                      </React.Fragment>
                        ) : (null)}
                  {(this.props.createShow === true) ? (
                    <Form>
                      <Form.Group widths='equal'>
                        <Form.Input fluid label='Show Name' placeholder='Show Name' autoFocus="autofocus" onChange={this.getNewShowName} />
                        <Form.Input fluid label='Show Location' placeholder='Show Location' onChange={this.getNewShowLocation} />
                      </Form.Group>
                      <Form.Button primary onClick={this.props.userOfficiallyCreatesShow} >Save</Form.Button>
                      <Form.Button secondary onClick={this.handleClickCreateNewShow} >Cancel</Form.Button>
                    </Form>
                  ) : (null)}
                </div>

            {/*    // **************************************************
                // TEMPORARILY CUTTING NOTES FROM PROJECT AS ONLY USERS HAVE THEM AND THEY ARE SHARED IN THE SAME PROFILE FOR NOW!!
                // **************************************************

                // <div id='UserNotes'>
                //     {(this.props.displayNotes === true) ? (
                //       <React.Fragment>
                //         <div  id='profile-notes-list'>All User's Notes
                {notes}
                </div>
                //         <Button primary onClick={this.props.userCreatingNewNote}>Create New Note</Button>
                //       </React.Fragment>
                //         ) : (null)}
                //   {(this.props.createNote === true) ? (
                //     <Form>
                //       <Form.Group widths='equal'>
                //         <Form.Input fluid label='Note Name' placeholder='Note Name' />
                //         <Form.Input fluid label='Upload Note Picture' placeholder='Upload Note Picture' />
                //       </Form.Group>
                //       <Form.Button primary>Save</Form.Button>
                //       <Form.Button secondary onClick={this.props.userCancelsCreatingNewNote} >Cancel</Form.Button>
                //     </Form>
                //   ) : (null)}
                // </div> */}

              </div>
              ) : (null)
            }
          </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    viewingProfile: state.viewingProfile,
    currentUser: state.currentUser,
    profileBeingViewed: state.profileBeingViewed,
    editingProfile: state.editingProfile,
    editingProfileError: state.editingProfileError,
    editingTeams: state.editingTeams,
    editingShows: state.editingShows,
    editingNotes: state.editingNotes,
    displayTeams: state.displayTeams,
    displayShows: state.displayShows,
    displayNotes: state.displayNotes,
    createTeam: state.createTeam,
    createShow: state.createShow,
    createNote: state.createNote,
    allUsers: state.allUsers,
    allTeams: state.allTeams,
    allShows: state.allShows,
    deleteProfileWarning: state.deleteProfileWarning
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userEditingProfile: () => {
      dispatch(editProfile())
    },
    userOfficiallyEditsProfile: (editedUser, tempAllUsers) => {
      dispatch(completeEditProfile(editedUser, tempAllUsers))
    },
    userCancelsEditProfile: () => {
      dispatch(cancelEditProfile())
    },
    userEditingProfileError: () => {
      dispatch(editProfileError())
    },
    userOfficiallyCreatesTeam: (newTeam, tempAllTeams) => {
      dispatch(completeCreateNewTeam(newTeam, tempAllTeams))
    },
    userOfficiallyCreatesShow: (newShow, tempAllShows) => {
      dispatch(completeCreateNewShow(newShow, tempAllShows))
    },
    userEditingTeams: () => {
      dispatch(editTeams())
    },
    userEditingShows: () => {
      dispatch(editShows())
    },
    userEditingNotes: () => {
      dispatch(editNotes())
    },
    userDisplaysTeams: () => {
      dispatch(displayTeams())
    },
    userDisplaysShows: () => {
      dispatch(displayShows())
    },
    userDisplaysNotes: () => {
      dispatch(displayNotes())
    },
    userCreatingNewTeam: () => {
      dispatch(createNewTeam())
    },
    userCancelsCreatingNewTeam: () => {
      dispatch(cancelCreateNewTeam())
    },
    userCreatingNewShow: () => {
      dispatch(createNewShow())
    },
    userCancelsCreatingNewShow: () => {
      dispatch(cancelCreateNewShow())
    },
    userCreatingNewNote: () => {
      dispatch(createNewNote())
    },
    userCancelsCreatingNewNote: () => {
      dispatch(cancelCreateNewNote())
    },
    gettingAllTheUsers: (users) => {
      dispatch(getAllUsers(users))
    },
    gettingAllTheTeams: (teams) => {
      dispatch(getAllTeams(teams))
    },
    gettingAllTheShows: (shows) => {
      dispatch(getAllShows(shows))
    },
    userLoggingOutFromDelete: (newSetOfUsers) => {
      dispatch(logOutFromDelete(newSetOfUsers))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
