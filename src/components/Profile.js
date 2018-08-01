import React from 'react';
import '../assets/App.css';
import { Container, Divider, Button, Form, Message, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { userViewProfile, editProfile, editTeams, editShows, editNotes, displayTeams, displayShows, displayNotes, createNewTeam, createNewShow, createNewNote, cancelEditProfile, cancelCreateNewTeam, cancelCreateNewShow, cancelCreateNewNote, completeEditProfile, editProfileError, getAllUsers, getAllTeams, getAllShows, logOutFromDelete, completeCreateNewTeam, completeCreateNewShow, displayOtherUsers, addUserTo, cancelAddUserTo, deleteAUser, deleteATeam, deleteAShow, completeEditAUserProfile, completeEditATeamProfile ,completeEditAShowProfile } from '../actions/index';
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

    if (this.props.profileBeingViewed.source === "user") {
      // let editedUser = {
      //   name: this.state.editProfileName,
      //   email: this.state.editProfileEmail,
      //   img_src: this.state.editProfilePic,
      //   coach: this.state.coachChecked
      // }
      let editedUser = {
        name: this.state.editProfileName,
        email: this.state.editProfileEmail,
        password: this.props.currentUser.password,
        coach: this.state.coachChecked,
        img_src: this.state.editProfilePic,
        source: "user"
      }
      let tempAllUsers = [...this.props.allUsers]
      let userToReplace = tempAllUsers.find(user => {
        return user.id === this.props.profileBeingViewed.id
      })
      let toRemoveIndex = tempAllUsers.indexOf(userToReplace)
      // console.log('tempAllUsers', tempAllUsers);
      tempAllUsers.splice(toRemoveIndex, 1, editedUser)
      // console.log('tempAllUsers after splice', tempAllUsers);
      let existingUser =
        this.props.allUsers.find(user => {
          return user.email === editedUser.email
        })
        if (existingUser !== undefined) {
          this.props.userEditingProfileError()
        } else {
          fetch(`${userURL}/${this.props.profileBeingViewed.id}`, {
            method: "PATCH",
            mode: "cors",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(editedUser)
          })
          .then(res => res.json())
          .then(json => this.props.userOfficiallyEditsAUser(json))
          // .then(fetch(userURL)
          //   .then(res => res.json())
          //   .then(json => this.props.gettingAllTheUsers(json)))

        }
    } else if (this.props.profileBeingViewed.source === "team") {
      // let editedUser = {
      //   name: this.state.editProfileName,
      //   email: this.state.editProfileEmail,
      //   img_src: this.state.editProfilePic,
      //   coach: this.state.coachChecked
      // }
      let editedTeam = {
        name: this.state.editProfileName,
        source: "team"
      }
      let tempAllTeams = [...this.props.allTeams]
      let teamToReplace = tempAllTeams.find(team => {
        return team.id === this.props.profileBeingViewed.id
      })
      let toRemoveIndex = tempAllTeams.indexOf(teamToReplace)
      // console.log('tempAllTeams', tempAllTeams);
      tempAllTeams.splice(toRemoveIndex, 1, editedTeam)
      // console.log('tempAllTeams after splice', tempAllTeams);
      let existingTeam =
        this.props.allTeams.find(team => {
          return team.name === editedTeam.name
        })
        if (existingTeam !== undefined) {
          this.props.userEditingProfileError()
        } else {
          fetch(`${teamURL}/${this.props.profileBeingViewed.id}`, {
            method: "PATCH",
            mode: "cors",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(editedTeam)
          })
          .then(res => res.json())
          .then(json => this.props.userOfficiallyEditsATeam(json))
          // .then(fetch(userURL)
          //   .then(res => res.json())
          //   .then(json => this.props.gettingAllTheTeams(json)))
        }
    } else if (this.props.profileBeingViewed.source === "show") {
      let editedShow = {
        name: this.state.editProfileName,
        location: this.state.editProfileEmail,
        source: "show"
      }
      let tempAllShows = [...this.props.allShows]
      let showToReplace = tempAllShows.find(show => {
        return show.id === this.props.profileBeingViewed.id
      })
      let toRemoveIndex = tempAllShows.indexOf(showToReplace)
      tempAllShows.splice(toRemoveIndex, 1, editedShow)
      let existingShow =
        this.props.allShows.find(show => {
          return show.name === editedShow.name && show.location === editedShow.location
        })
        if (existingShow !== undefined) {
          this.props.userEditingProfileError()
        } else {
          fetch(`${showURL}/${this.props.profileBeingViewed.id}`, {
            method: "PATCH",
            mode: "cors",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(editedShow)
          })
          .then(res => res.json())
          .then(json => this.props.userOfficiallyEditsAShow(json))
        }
    }
  }

  warnDeleteProfile = () => {
    this.setState({
      deleteWarningOpen: !this.state.deleteWarningOpen
    })
  }




  finalAnswerDeleteProfile = () => {
    if (this.props.profileBeingViewed.source === "user") {
      let tempAllUsers = [...this.props.allUsers]
      let userToKill = tempAllUsers.find(user => {
        return user.email === this.props.profileBeingViewed.email
      })
      let toRemoveIndex = tempAllUsers.indexOf(userToKill)
      tempAllUsers.splice(toRemoveIndex, 1)
      fetch(`${userURL}/${this.props.profileBeingViewed.id}`, {
        method: "DELETE"
      })
      this.warnDeleteProfile()
      if (this.props.profileBeingViewed.email === this.props.currentUser.email) {
        this.props.userLoggingOutFromDelete(tempAllUsers)
      }
      this.props.userDeletesAUser(tempAllUsers, this.props.currentUser)
    } else if (this.props.profileBeingViewed.source === "team") {
      let tempAllTeams = [...this.props.allTeams]
      let teamToKill = tempAllTeams.find(team => {
        return team.id === this.props.profileBeingViewed.id
      })
      let toRemoveIndex = tempAllTeams.indexOf(teamToKill)
      tempAllTeams.splice(toRemoveIndex, 1)
      fetch(`${teamURL}/${this.props.profileBeingViewed.id}`, {
        method: "DELETE"
      })
      this.warnDeleteProfile()
      this.props.userDeletesATeam(tempAllTeams, this.props.currentUser)
    } else if (this.props.profileBeingViewed.source === "show") {
      let tempAllShows = [...this.props.allShows]
      let showToKill = tempAllShows.find(show => {
        return show.id === this.props.profileBeingViewed.id
      })
      let toRemoveIndex = tempAllShows.indexOf(showToKill)
      tempAllShows.splice(toRemoveIndex, 1)
      fetch(`${showURL}/${this.props.profileBeingViewed.id}`, {
        method: "DELETE"
      })
      this.warnDeleteProfile()
      this.props.userDeletesAShow(tempAllShows, this.props.currentUser)
    }
  }






  handleClickAddUserTo = () => {
    console.log("user added to thing");
  }

  tempGetUserToAdd = () => {

  }
////WHERE MIKE WAS HELPING ME IN THE BACKEND!!////
  handleClickCreateNewTeam = () => {
    let newTeam = {
      name: this.state.newTeamName,
      userIds: this.props.currentUser.id,
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
    .then(this.setState({newTeamName: ""}))

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
  console.log('PROFILE BEING VIEWED', this.props.profileBeingViewed);
  let teams
  if (this.props.profileBeingViewed.teams !== undefined) {
    teams = this.props.profileBeingViewed.teams.map(team => {
      return ( <ListItem team={team} id={`${team.source}-${team.id}`} key={`${team.source}-${team.id}`}/> )
    })
  } else if (this.props.profileBeingViewed.teams_uniq !== undefined) {
    teams = this.props.profileBeingViewed.teams_uniq.map(team => {
      return ( <ListItem team={team} id={`${team.source}-${team.id}`} key={`${team.source}-${team.id}`}/> )
    })
  } else {
    teams = [];
  }
  let shows
  if (this.props.profileBeingViewed.shows !== undefined) {
    shows = this.props.profileBeingViewed.shows.map(show => {
      return ( <ListItem show={show} id={`${show.source}-${show.id}`} key={`${show.source}-${show.id}`}/> )
    })
  } else if (this.props.profileBeingViewed.shows_uniq !== undefined) {
    shows = this.props.profileBeingViewed.shows_uniq.map(show => {
      return ( <ListItem show={show} id={`${show.source}-${show.id}`} key={`${show.source}-${show.id}`}/> )
    })
  } else {
    shows = [];
  }
  let users
  if (this.props.profileBeingViewed.users !== undefined) {
    users = this.props.profileBeingViewed.users.map(user => {
      return ( <ListItem user={user} id={`${user.source}-${user.id}`} key={`${user.source}-${user.id}`}/> )
    })
  } else {
    users = [];
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

    let belowName
    let leftButton
    let rightButton
    let profileUsers
    let profileTeams
    let profileShows
    if (this.props.profileBeingViewed.source === "user") {
      profileTeams = `${this.props.profileBeingViewed.name}'s Teams`
      profileShows = `${this.props.profileBeingViewed.name}'s Shows`
      belowName = this.props.profileBeingViewed.email
      leftButton = <Button onClick={this.props.userDisplaysTeams}>Teams</Button>
      rightButton = <Button onClick={this.props.userDisplaysShows}>Shows</Button>
    } else if (this.props.profileBeingViewed.source === "team") {
      profileUsers = `${this.props.profileBeingViewed.name}'s Users`
      profileShows = `${this.props.profileBeingViewed.name}'s Shows`
      belowName = ""
      leftButton = <Button onClick={this.props.userDisplaysOtherUsers}>Users</Button>
      rightButton = <Button onClick={this.props.userDisplaysShows}>Shows</Button>
    } else if (this.props.profileBeingViewed.source === "show") {
      profileTeams = `${this.props.profileBeingViewed.name}'s Teams`
      profileUsers = `${this.props.profileBeingViewed.name}'s Users`
      belowName = this.props.profileBeingViewed.location
      leftButton = <Button onClick={this.props.userDisplaysOtherUsers}>Users</Button>
      rightButton = <Button onClick={this.props.userDisplaysTeams}>Teams</Button>
    }
    console.log("profileUsers", profileUsers);
    console.log("profileTeams", profileTeams);
    console.log("profileShows", profileShows);

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
                  <h3>{belowName}</h3>
                </Container>



                <Container textAlign='left'>
                  {leftButton}
                </Container>
                <Container textAlign='center'>
                  {rightButton}
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


                {(this.props.editingProfile === true && this.props.editingProfileError === false && this.props.profileBeingViewed.source === "user") ? (
                  <Form>
                    <Form.Group widths='equal'>
                      <Form.Input fluid label='Full Name' placeholder='Full Name' defaultValue={this.props.profileBeingViewed.name} autoFocus='autofocus' onChange={this.editUserName} />
                      <Form.Input fluid label='Email' placeholder='Email' defaultValue={this.props.profileBeingViewed.email} onChange={this.editUserEmail} />
                      {/*<Form.Input fluid label='Upload Profile Picture' placeholder='Upload Profile Picture' onChange={this.editUserPic} />*/}
                      <Form.Checkbox label='Are You A Coach?' checked={this.state.coachChecked} onClick={this.toggleUserCoach} />
                    </Form.Group>
                    <Form.Button primary onClick={this.handleEditProfileSubmit}>Save</Form.Button>
                    <Form.Button secondary onClick={this.props.userCancelsEditProfile}>Cancel</Form.Button>
                    <Form.Button color='red' onClick={this.warnDeleteProfile} >Delete Profile</Form.Button>
                  </Form>
                ) : (null)}

                {(this.props.editingProfile === true && this.props.editingProfileError === false && this.props.profileBeingViewed.source === "team") ? (
                  <Form>
                    <Form.Group widths='equal'>
                      <Form.Input fluid label='Team Name' placeholder='Team Name' defaultValue={this.props.profileBeingViewed.name} autoFocus='autofocus' onChange={this.editUserName} />
                      {/*<Form.Input fluid label='Email' placeholder='Email' onChange={this.editUserEmail} />
                      <Form.Input fluid label='Upload Profile Picture' placeholder='Upload Profile Picture' onChange={this.editUserPic} />
                      <Form.Checkbox label='Are You A Coach?' checked={this.state.coachChecked} onClick={this.toggleUserCoach} />*/}
                    </Form.Group>
                    <Form.Button primary onClick={this.handleEditProfileSubmit}>Save</Form.Button>
                    <Form.Button secondary onClick={this.props.userCancelsEditProfile}>Cancel</Form.Button>
                    <Form.Button color='red' onClick={this.warnDeleteProfile} >Delete Profile</Form.Button>
                  </Form>
                ) : (null)}


                {(this.props.editingProfile === true && this.props.editingProfileError === false && this.props.profileBeingViewed.source === "show") ? (
                  <Form>
                    <Form.Group widths='equal'>
                      <Form.Input fluid label='Show Name' placeholder='Show Name' defaultValue={this.props.profileBeingViewed.name} autoFocus='autofocus' onChange={this.editUserName} />
                      <Form.Input fluid label='Location' placeholder='Location' defaultValue={this.props.profileBeingViewed.location} onChange={this.editUserEmail} />
                      {/*<Form.Input fluid label='Upload Profile Picture' placeholder='Upload Profile Picture' onChange={this.editUserPic} />
                      <Form.Checkbox label='Are You A Coach?' checked={this.state.coachChecked} onClick={this.toggleUserCoach} />*/}
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


                {(this.props.profileBeingViewed === this.props.currentUser) ? (
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
                ) : (
                  <Modal
                    open={this.state.deleteWarningOpen}
                  >
                    <Modal.Header>Delete This Account</Modal.Header>
                    <Modal.Content>
                      <p>Are you sure you want to delete this account</p>
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
                )}





{/*//// ADD USER TO THING handleClickAddUserTo NEEDS TO DO SOMETHING
//// ALSO HOW AM I GOING TO SELECT THE USER? DROPDOWN?*/}

            <div id='OtherUsers'>
                {(this.props.displayUsers === true) ? (
                  <React.Fragment>
                    <div id='profile-users-list'>
                      <br></br>
                      <h4>{profileUsers}</h4>
                      {users}
                    </div>
                    <br></br>
                    <Button primary onClick={this.props.userAddingUserTo}>Add User</Button>
                  </React.Fragment>
                    ) : (null)}
              {(this.props.addUserTo === true) ? (
                <Form>
                  <Form.Group widths='equal'>
                    <Form.Input fluid label='User Name' placeholder='User Name' autoFocus="autofocus" onChange={this.tempGetUserToAdd} />
                  </Form.Group>
                  <Form.Button primary onClick={this.handleClickAddUserTo} >Save</Form.Button>
                  <Form.Button secondary onClick={this.props.userCancelAddingUserTo} >Cancel</Form.Button>
                </Form>
              ) : (null)}
            </div>





            <div id='UserTeams'>
                {(this.props.displayTeams === true) ? (
                  <React.Fragment>
                    <div id='profile-teams-list'>
                      <br></br>
                      <h4>{profileTeams}</h4>
                      {teams}
                    </div>
                    <br></br>
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
                          <br></br>
                          <h4>{profileShows}</h4>
                          {shows}
                        </div>
                        <br></br>
                        <Button primary onClick={this.props.userCreatingNewShow}>Create New Show</Button>
                      </React.Fragment>
                        ) : (null)}
                  {(this.props.createShow === true) ? (
                    <Form>
                      <Form.Group widths='equal'>
                        <Form.Input fluid label='Show Name' placeholder='Show Name' autoFocus="autofocus" onChange={this.getNewShowName} />
                        <Form.Input fluid label='Show Location' placeholder='Show Location' onChange={this.getNewShowLocation} />
                      </Form.Group>
                      <Form.Button primary onClick={this.handleClickCreateNewShow} >Save</Form.Button>
                      <Form.Button secondary onClick={this.props.userCancelsCreatingNewShow} >Cancel</Form.Button>
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
    displayUsers: state.displayUsers,
    displayTeams: state.displayTeams,
    displayShows: state.displayShows,
    displayNotes: state.displayNotes,
    createTeam: state.createTeam,
    createShow: state.createShow,
    createNote: state.createNote,
    allUsers: state.allUsers,
    allTeams: state.allTeams,
    allShows: state.allShows,
    deleteProfileWarning: state.deleteProfileWarning,
    addUserTo: state.addUserTo,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userEditingProfile: () => {
      dispatch(editProfile())
    },
    userOfficiallyEditsAUser: (editedUserData) => {
      dispatch(completeEditAUserProfile(editedUserData))
    },
    userOfficiallyEditsATeam: (editedTeamData) => {
      dispatch(completeEditATeamProfile(editedTeamData))
    },
    userOfficiallyEditsAShow: (editedShowData) => {
      dispatch(completeEditAShowProfile(editedShowData))
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
    userDisplaysOtherUsers: () => {
      dispatch(displayOtherUsers())
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
    userAddingUserTo: () => {
      dispatch(addUserTo())
    },
    userCancelAddingUserTo: () => {
      dispatch(cancelAddUserTo())
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
    userDeletesAUser: (newSetOfUsers, currentUser) => {
      dispatch(deleteAUser(newSetOfUsers, currentUser))
    },
    userDeletesATeam: (newSetOfTeams, currentUser) => {
      dispatch(deleteATeam(newSetOfTeams, currentUser))
    },
    userDeletesAShow: (newSetOfShows, currentUser) => {
      dispatch(deleteAShow(newSetOfShows, currentUser))
    },
    userLoggingOutFromDelete: (newSetOfUsers) => {
      dispatch(logOutFromDelete(newSetOfUsers))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
