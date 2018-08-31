import React from 'react';
// import M from 'materialize-css';
// import './index.scss';
// import PropTypes from 'prop-types';



class FileListHeader extends React.Component {
  componentDidMount() {
    // M.Sidenav.init(this.sidenav);
    M.Dropdown.init(this.last_modified);
  }
  render() {
    return (
      <div
        style={{
          padding: "2px 10px 61px",
          margin: "10px 10px 10px 10px",
          borderStyle: "none none solid none",
          margin: "0px",
          borderColor: "#e8dada",
          borderWidth: "1px",
          height: "60px"
        }}
        className="row file-list-head">
        <div className="col s5">
          <div className="row">
            <div className="col s2">
              <form action="#">
                <label>
                  <input type="checkbox" className="filled-in" checked="checked" />
                  <span></span>
                </label>
              </form>
            </div>
            <div
              style={{
                width: "46px",
                padding: "0px"
              }}
              className="col s5">
              {"Name"}
            </div>
            <div
              style={{
                padding: "0px"
              }}
              className="col s5">
              <i className="material-icons prefix">vertical_align_bottom</i>
            </div>
          </div>
        </div>
        <div
          style={{
            color: "grey",
            padding: "0px"
          }}
          className="col s1">{"Owner"}
        </div>
        <div className="col s4">
          <div className="row">
            <div
              style={{
                padding: "0px"
              }}
              className="col s4">
              <a
                style={{
                  color: "black"
                }}
                className='dropdown-trigger'
                data-target='last-modified-head'
                href="#"
                ref={(last_modified) => { this.last_modified = last_modified; }}>
                <span>{"Last Modified"}</span>
              </a>
            </div>
            <div
              style={{
                padding: "0px"
              }}
              className="col s2">
              <i className="material-icons prefix">vertical_align_top</i>
            </div>
            <ul id='last-modified-head' className='dropdown-content'>
              <li><a href="#!">{"Last Modified"}</a></li>
              <li><a href="#!">{"Last Opened"}</a></li>
              <li><a href="#!">{"Last Modified By Me"}</a></li>
            </ul>
          </div>
        </div>
        <div
          style={{
            color: "grey",
            padding: "0px"
          }}
          className="col s2">
          {"File Size"}
        </div>
      </div>
    );
  }
}

FileListHeader.propTypes = {
  // classes: PropTypes.object.isRequired,
  // theme: PropTypes.object.isRequired,
};

export default FileListHeader;
