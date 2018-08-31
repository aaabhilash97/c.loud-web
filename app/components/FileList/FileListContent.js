import React from 'react';
// import M from 'materialize-css';
// import './index.scss';
import PropTypes from 'prop-types';

import './FileListContent.scss';

class FileListContent extends React.Component {
  componentDidMount() {
    // M.Sidenav.init(this.sidenav);
    M.Dropdown.init(this.last_modified);
  }
  render() {
    const { name } = this.props;
    return (
      <div
        style={{
          padding: "20px 10px 10px 10px",
          margin: "10px 10px 10px 10px",
          borderStyle: "none",
          margin: "0px",
          borderColor: "black",
          borderWidth: "1px",
          height: "60px"
        }}
        className="row file-list-content file-list-head">
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
                padding: "0px"
              }}
              className="col s10">
              {name + "-Guardians.Of.The.Galaxy.Vol..2.2017.720p.BluRay.x264-[YTS.AG].mp4".slice(0, 25) + '..'}
            </div>
          </div>
        </div>
        <div
          style={{
            color: "grey"
          }}
          className="col s1">{"me"}
        </div>
        <div
          style={{
            padding: "0px",
            margin: "0px"
          }}
          className="col s4">
          <div
            style={{
              color: "grey"
            }}
          >
            {"2018-07-01T06:52:11.881Z"}
          </div>
        </div>
        <div
          style={{
            color: "grey"
          }}
          className="col s2">
          {"1.2GB"}
        </div>
      </div>
    );
  }
}

FileListContent.propTypes = {
  // classes: PropTypes.object.isRequired,
  // theme: PropTypes.object.isRequired,
  name: PropTypes.any
};

export default FileListContent;
