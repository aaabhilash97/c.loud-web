/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_DATA } from 'containers/HomePage/constants';
import { dataLoaded, dataLoadingError } from 'containers/HomePage/actions';

import request from 'utils/request';

/**
 * Github repos request/response handler
 */
export function* getData() {
  // Select username from store
  const requestURL = 'https://api.github.com/users/aaabhilash97/repos?type=all&sort=updated';

  try {
    // Call our request helper (see 'utils/request')
    const data = yield call(request, requestURL);
    yield put(dataLoaded(data));
  } catch (err) {
    yield put(dataLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* getSkillData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_DATA, getData);
}
