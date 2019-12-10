import { combineReducers } from 'redux';

import { reducer as Albums } from './Albums';

export default combineReducers({
  Albums,
});