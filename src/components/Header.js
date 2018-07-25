import React from 'react';
import '../assets/App.css';
import { connect } from 'react-redux';
import { Input, Menu } from 'semantic-ui-react'
import { userLogsOut, userViewProfile, userSearches } from '../actions/index';


class Header extends React.Component {
  constructor(){
    super();
    this.state = {
      activeItem: 'profile'
    }
  }

  handleProfileClick = () => {
    console.log('profile!');
    this.setState({ activeItem: 'profile' })
    this.props.userIsViewingProfile()
  }

  handleSearchClick = () => {
    console.log('search!');
    this.setState({ activeItem: 'search' })
    this.props.userIsSearching()
  }

  handleLogoutClick = () => {
    console.log('logout!');
    this.props.userLoggingOut()
    this.setState({ activeItem: 'profile' })
  }

  render(){
    return(
      <React.Fragment>
        {(this.props.loggedIn === false) ? (null) : (
          <div id='Header'>
            <Menu className='menu-bar' >
              <Menu.Item name='profile' active={this.state.activeItem === 'profile'} onClick={this.handleProfileClick} />
              <Menu.Item
                name='search'
                active={this.state.activeItem === 'search'}
                onClick={this.handleSearchClick}
              />
            <Menu.Menu position='right'>
                <Menu.Item
                  name='logout'
                  active={this.state.activeItem === 'logout'}
                  onClick={this.handleLogoutClick}
                />
              </Menu.Menu>
            </Menu>
          </div>
        )}
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userLoggingOut: () => {
      dispatch(userLogsOut())
    },
    userIsViewingProfile: () => {
      dispatch(userViewProfile())
    },
    userIsSearching: () => {
      dispatch(userSearches())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

///////////////////////

///////////////////


// export default class MenuExampleSecondary extends Component {
//   state = { this.state.activeItem: 'home' }
//
//   handleItemClick = (e, { name }) => this.setState({ activeItem: name })
//
//   render() {
//     const { activeItem } = this.state
//
//     return (
//
//     )
//   }
// }
