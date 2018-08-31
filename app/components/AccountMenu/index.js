import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages.js';

import './index.scss';

const ProfileAvatar = styled.img`
  border-radius: 52px;
`;

class AccountMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  handleClick(e) {
    const e_pageX = e.pageX;
    const e_pageY = e.pageY;
    this.setState((prevState) => {
      let currentState = { ...prevState };
      let isToggleOn = !prevState.isToggleOn;
      currentState.isToggleOn = isToggleOn;
      currentState.x = e_pageX;
      currentState.y = e_pageY;
      if (isToggleOn) {
        document.addEventListener('click', this.handleOutsideClick, false);
      } else {
        document.removeEventListener('click', this.handleOutsideClick, false);
      }
      return currentState;
    });
  }

  handleOutsideClick() {
    document.removeEventListener('click', this.handleOutsideClick, false);
    this.setState((prevState) => {
      let currentState = { ...prevState };
      if (currentState.isToggleOn) {
        let isToggleOn = !prevState.isToggleOn;
        currentState.isToggleOn = isToggleOn;
        return currentState;
      } else {
        return currentState;
      }
    });
  }

  render() {
    return (
      <div>
        <a
          onClick={this.handleClick}
        >
          <ProfileAvatar
            height="50px"
            width="50px"
            src="http://newwaysministryblog.files.wordpress.com/2012/08/john-doe.jpg?resize=225%2C225" />
        </a>
        <div
          style={{
            display: this.state.isToggleOn ? "block" : "none",
            top: this.state.y + 15 + "px",
            left: this.state.x - 160 + "px"
          }}
          className="accout-menu-dropdown">
          <a href="#">
            <FormattedMessage {...messages.accountSettingsMessage} />
          </a>
          <a href="#">
            <FormattedMessage {...messages.logoutMessage} />
          </a>
        </div>
      </div>
    );
  }
}

AccountMenu.propTypes = {
  // classes: PropTypes.object.isRequired,
  // theme: PropTypes.object.isRequired,
};

export default AccountMenu;
