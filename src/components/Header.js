import React from 'react';
import '../assets/App.css';
import { connect } from 'react-redux';
import { Input, Menu } from 'semantic-ui-react'


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
  }

  handleSearchClick = () => {
    console.log('search!');
    this.setState({ activeItem: 'search' })
  }

  handleLogoutClick = () => {
    console.log('logout!');
    this.setState({ activeItem: 'logout' })
  }

  render(){
    return(
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
    )
  }
}

export default Header;

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
