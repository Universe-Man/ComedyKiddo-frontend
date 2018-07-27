import React from 'react';
import '../assets/App.css';
import { Container, Divider, Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { userViewProfile, editProfile, editTeams, editShows, editNotes, displayTeams, displayShows, displayNotes, createNewTeam, createNewShow, createNewNote } from '../actions/index';
import ListItem from '../components/ListItem';


class Profile extends React.Component {
  constructor(){
    super();
    this.state = {}
  }


render(){
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
  if (this.props.profileBeingViewed.shows !== undefined) {
    shows = this.props.profileBeingViewed.shows.map(show => {
      console.log('shows', show);
      return ( <ListItem show={show} id={`${show.source}-${show.id}`} key={`${show.source}-${show.id}`}/> )
    })
  } else {
    shows = [];
  }
  let notes
  if (this.props.profileBeingViewed.notes !== undefined) {
    notes = this.props.profileBeingViewed.notes.map(note => {
      console.log('notes', note);
      return ( <ListItem note={note} id={note.id} key={note.id}/> )
    })
  } else {
    notes = [];
  }
    console.log("the current profile?", this.props.profileBeingViewed);
    console.log("editing profile?", this.props.editingProfile);
    console.log("CONCENTRATED GOD STATE", this.props);
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
                <Container textAlign='right'>
                  {(this.props.profileBeingViewed.notes) ? (
                    <React.Fragment>
                      <Button onClick={this.props.userDisplaysNotes}>Notes</Button>
                      <h3>notes</h3>
                    </React.Fragment>
                  ) : (null)}
                </Container>

                {(this.props.editingProfile === true) ? (
                  <Form>
                    <Form.Group widths='equal'>
                      <Form.Input fluid label='Full Name' placeholder='Full Name' />
                      <Form.Input fluid label='Email' placeholder='Email' />
                      <Form.Input fluid label='Upload Profile Picture' placeholder='Upload Profile Picture' />
                      <Form.Checkbox label='Are You A Coach?' />
                    </Form.Group>
                    <Form.Button primary>Save</Form.Button>
                    <Form.Button secondary>Cancel</Form.Button>
                    <Form.Button color='red'>Delete Profile</Form.Button>
                  </Form>
                ) : (null)}

            <div id='UserTeams'>
                {(this.props.displayTeams === true) ? (
                  <React.Fragment>
                    <div>All User's Teams</div>
                    <Button primary onClick={this.props.userCreatingNewTeam}>Create New Team</Button>
                  </React.Fragment>
                    ) : (null)}
              {(this.props.createTeam === true) ? (
                <Form>
                  <Form.Group widths='equal'>
                    <Form.Input fluid label='Team Name' placeholder='Team Name' />
                    <Form.Input fluid label='Upload Team Picture' placeholder='Upload Team Picture' />
                  </Form.Group>
                  <Form.Button primary>Save</Form.Button>
                  <Form.Button secondary>Cancel</Form.Button>
                </Form>
              ) : (null)}
            </div>

                <div id='UserShows'>
                    {(this.props.displayShows === true) ? (
                      <React.Fragment>
                        <div>All User's Shows</div>
                        <Button primary onClick={this.props.userCreatingNewShow}>Create New Show</Button>
                      </React.Fragment>
                        ) : (null)}
                  {(this.props.createShow === true) ? (
                    <Form>
                      <Form.Group widths='equal'>
                        <Form.Input fluid label='Show Name' placeholder='Show Name' />
                        <Form.Input fluid label='Upload Show Picture' placeholder='Upload Show Picture' />
                      </Form.Group>
                      <Form.Button primary>Save</Form.Button>
                      <Form.Button secondary>Cancel</Form.Button>
                    </Form>
                  ) : (null)}
                </div>

                <div id='UserNotes'>
                    {(this.props.displayNotes === true) ? (
                      <React.Fragment>
                        <div>All User's Notes</div>
                        <Button primary onClick={this.props.userCreatingNewNote}>Create New Note</Button>
                      </React.Fragment>
                        ) : (null)}
                  {(this.props.createNote === true) ? (
                    <Form>
                      <Form.Group widths='equal'>
                        <Form.Input fluid label='Note Name' placeholder='Note Name' />
                        <Form.Input fluid label='Upload Note Picture' placeholder='Upload Note Picture' />
                      </Form.Group>
                      <Form.Button primary>Save</Form.Button>
                      <Form.Button secondary>Cancel</Form.Button>
                    </Form>
                  ) : (null)}
                </div>

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
    profileBeingViewed: state.profileBeingViewed,
    editingProfile: state.editingProfile,
    editingTeams: state.editingTeams,
    editingShows: state.editingShows,
    editingNotes: state.editingNotes,
    displayTeams: state.displayTeams,
    displayShows: state.displayShows,
    displayNotes: state.displayNotes,
    createTeam: state.createTeam,
    createShow: state.createShow,
    createNote: state.createNote,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userEditingProfile: () => {
      dispatch(editProfile())
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
    userCreatingNewShow: () => {
      dispatch(createNewShow())
    },
    userCreatingNewNote: () => {
      dispatch(createNewNote())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
