/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectData, makeSelectLoading, makeSelectError } from 'containers/HomePage/selectors';
import HomePageLayout from 'components/HomePageLayout';
import { loadFiles } from './actions';
import reducer from './reducer';
import saga from './saga';


export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    document.body.style.overflow = "hidden";
    //this.props.initLoadData();
  }

  render() {
    debugger;
    const { file_loading, file_loading_error, files } = this.props;
    const propsList = {
      file_loading, file_loading_error, files
    };
    return (
      <div>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="Home Page" />
        </Helmet>
        <div>
          <HomePageLayout {...propsList} />
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  file_loading: PropTypes.bool,
  file_loading_error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  files: PropTypes.oneOfType([
    PropTypes.array
  ]),
  initLoadData: PropTypes.func
};

export function mapDispatchToProps(dispatch) {
  return {
    initLoadData: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadFiles());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  files: makeSelectData(),
  file_loading: makeSelectLoading(),
  file_loading_error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'data', reducer });
const withSaga = injectSaga({ key: 'data', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
