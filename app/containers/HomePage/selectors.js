/**
 * Moviepage selectors
 */

import { createSelector } from 'reselect';

const selectData = (state) => state.get('data');


const makeSelectData = () => createSelector(
  selectData,
  (dataState) => dataState.get('data')
);

const makeSelectLoading = () => createSelector(
  selectData,
  (dataState) => dataState.get('loading')
);

const makeSelectError = () => createSelector(
  selectData,
  (dataState) => dataState.get('error')
);

export {
  selectData,
  makeSelectData,
  makeSelectLoading,
  makeSelectError,
};
