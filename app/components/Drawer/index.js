import React from 'react';
import M from 'materialize-css';
import './index.scss';
// import PropTypes from 'prop-types';

class PersistentDrawer extends React.Component {
  componentDidMount() {
    M.Sidenav.init(this.sidenav);
  }
  render() {
    return (
      <div className={this.className}>
        <ul
          id="slide-out"
          className="sidenav sidenav-fixed"
          ref={(sidenav) => { this.sidenav = sidenav; }}
        >
          <li><div className="">
            <div className="background">
              <a href="#!home">
                <img
                  height="64px"
                  src="https://www.gstatic.com/images/branding/product/2x/drive_48dp.png" />
                <span
                  style={{
                    fontSize: "23px",
                    color: "darkgrey"
                  }}
                > {"Logo Kittan illa"} </span>
              </a>
            </div>
          </div>
          </li>
          <li><div className="user-view">
            <div style={{
              backgroundColor: "black"
            }} className="background">
            </div>
            <a href="#user"><img className="circle" src="http://newwaysministryblog.files.wordpress.com/2012/08/john-doe.jpg?resize=225%2C225" /></a>
            <a href="#name"><span className="white-text name">John Doe</span></a>
            <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
          </div></li>
          <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
          <li><a href="#!">Second Link</a></li>
          <li><div className="divider"></div></li>
          <li><a className="subheader">Subheader</a></li>
          <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
        </ul>
      </div>
    );
  }
}

PersistentDrawer.propTypes = {
  // classes: PropTypes.object.isRequired,
  // theme: PropTypes.object.isRequired,
};

export default PersistentDrawer;
