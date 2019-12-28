import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the cursor state domain
 */

const selectCursorDomain = state => state.cursor || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Cursor
 */

const makeSelectCursor = () =>
  createSelector(
    selectCursorDomain,
    substate => substate,
  );

export default makeSelectCursor;
export { selectCursorDomain };
