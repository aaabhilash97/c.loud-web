import React from 'react';
import FileListHeader from 'components/FileList/FileListHeader.js';
import FileListContent from 'components/FileList/FileListContent.js';
// import M from 'materialize-css';
// import './index.scss';
// import PropTypes from 'prop-types';



class FileList extends React.Component {
  componentDidMount() {
    // M.Sidenav.init(this.sidenav);
    M.Dropdown.init(this.last_modified);
  }
  render() {
    return (
      <div
        style={{
          paddingTop: "4px"
        }}
        className="files-list hide-on-small-only">
        <FileListHeader />
        <div
          style={{
            overflow: "scroll",
            height: "75vh"
          }}
        >
          {[...new Array(60)].map(() => 0).map(function (name, index) {
            return <FileListContent key={index} name={index} />;
          })}
        </div>
      </div>
    );
  }
}

FileList.propTypes = {
  // classes: PropTypes.object.isRequired,
  // theme: PropTypes.object.isRequired,
};

export default FileList;
