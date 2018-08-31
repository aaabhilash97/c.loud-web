import React from 'react';
import Drawer from 'components/Drawer';
import FileList from 'components/FileList';
import HeaderBar from 'components/HeaderBar';
import Footer from 'components/Footer';
import './index.scss';
// import PropTypes from 'prop-types';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';


class HomePageComponent extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="sidebar">
          <Drawer />
        </div>
        <div className="header">
          <HeaderBar />
        </div>
        <div className="content">
          <FileList />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

HomePageComponent.propTypes = {
  // classes: PropTypes.object.isRequired,
  // theme: PropTypes.object.isRequired,
};

export default HomePageComponent;
