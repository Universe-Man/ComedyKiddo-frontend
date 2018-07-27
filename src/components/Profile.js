import React from 'react';
import '../assets/App.css';
import { Container, Divider, Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { userViewProfile, editProfile, editTeams, editShows, editNotes, displayTeams, displayShows, displayNotes } from '../actions/index';
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









                {(this.props.displayTeams === true) ? (
                  <div id='UserTeams'>
                    <div>All User's Teams</div>
                    <Button primary>Create New Team</Button>
                  </div>
                ) : (null)}






                {/*}<Form>
                  <Form.Group widths='equal'>
                    <Form.Input fluid label='Team Name' placeholder='Team Name' />
                    <Form.Input fluid label='Upload Team Picture' placeholder='Upload Team Picture' />
                  </Form.Group>
                  <Form.Button primary>Save</Form.Button>
                  <Form.Button secondary>Cancel</Form.Button>
                  <Form.Button color='red'>Delete Team</Form.Button>
                </Form>*/}










                {(this.props.displayShows === true) ? (
                  <div id='UserShows'>
                    <div>All User's Shows</div>
                    <Button primary>Create New Show</Button>
                  </div>
                ) : (null)}



                {/*<Form>
                  <Form.Group widths='equal'>
                    <Form.Input fluid label='Show Name' placeholder='Show Name' />
                    <Form.Input fluid label='Upload Show Picture' placeholder='Upload Show Picture' />
                  </Form.Group>
                  <Form.Button primary>Save</Form.Button>
                  <Form.Button secondary>Cancel</Form.Button>
                  <Form.Button color='red'>Delete Show</Form.Button>
                </Form>*/}





                {(this.props.displayNotes === true) ? (
                  <div id='UserTeams'>
                    <div>All User's Notes</div>
                    <Button primary>Create New Note</Button>
                  </div>

                ) : (null)}


                {/*<Form>
                  <Form.Group widths='equal'>
                    <Form.Input fluid label='Note' placeholder='Note' />
                  </Form.Group>
                  <Form.Button primary>Save</Form.Button>
                  <Form.Button secondary>Cancel</Form.Button>
                  <Form.Button color='red'>Delete Note</Form.Button>
                </Form>*/}






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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);














// const options = [
//   { key: 'm', text: 'Male', value: 'male' },
//   { key: 'f', text: 'Female', value: 'female' },
// ]
//
// class FormExampleSubcomponentControl extends Component {
//   state = {}
//
//   handleChange = (e, { value }) => this.setState({ value })
//
//   render() {
//     const { value } = this.state
//     return (
//       <Form>
//         <Form.Group widths='equal'>
//           <Form.Input fluid label='First name' placeholder='First name' />
//           <Form.Input fluid label='Last name' placeholder='Last name' />
//           <Form.Select fluid label='Gender' options={options} placeholder='Gender' />
//         </Form.Group>
//         <Form.Group inline>
//           <label>Size</label>
//           <Form.Radio
//             label='Small'
//             value='sm'
//             checked={value === 'sm'}
//             onChange={this.handleChange}
//           />
//           <Form.Radio
//             label='Medium'
//             value='md'
//             checked={value === 'md'}
//             onChange={this.handleChange}
//           />
//           <Form.Radio
//             label='Large'
//             value='lg'
//             checked={value === 'lg'}
//             onChange={this.handleChange}
//           />
//         </Form.Group>
//         <Form.TextArea label='About' placeholder='Tell us more about you...' />
//         <Form.Checkbox label='I agree to the Terms and Conditions' />
//         <Form.Button>Submit</Form.Button>
//       </Form>
//     )
//   }
// }
//
// export default FormExampleSubcomponentControl
