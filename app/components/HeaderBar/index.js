import React from 'react';
import AccountMenu from 'components/AccountMenu';
// import PropTypes from 'prop-types';


class HeaderBar extends React.Component {
  componentDidMount() {
  }
  render() {
    return (
      <div
        style={{
          overflow: "hidden",
          width: "100%"
        }}
        className="main-header">
        <nav
          style={{
            backgroundColor: "snow"
          }}
          className="nav-extended header-nav">
          <div className="nav-wrapper">
            <div className="row">
              <div className="col s2 m2 l1 xl2">
                <a
                  style={{
                    color: "black"
                  }}
                  href="#" data-target="slide-out" className="sidenav-trigger">
                  <i className="material-icons">{"menu"}</i>
                </a>
              </div>
              <div className="input-field col s7 m7 l5 xl6">
                <i className="material-icons prefix">search</i>
                <input
                  placeholder="Search Files"
                  style={{ backgroundColor: "whitesmoke" }}
                  type="text" id="autocomplete-input" className="autocomplete" />
              </div>
              <div className="col s0 m1 l5 xl3">
              </div>
              <div className="col s2 m2 l1 xl1">
                <AccountMenu />
              </div>

            </div>
            {/* <div className="action-button">
                <a className="btn-floating btn-large halfway-fab waves-effect waves-light teal">
                  <i className="material-icons">add</i>
                </a>
              </div> */}
          </div>
        </nav>
      </div>
    );
  }
}

HeaderBar.propTypes = {
  // classes: PropTypes.object.isRequired,
  // theme: PropTypes.object.isRequired,
};

export default HeaderBar;
