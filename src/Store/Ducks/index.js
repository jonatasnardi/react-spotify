import { combineReducers } from 'redux';

import { reducer as Courses } from './Courses';
import { reducer as Albums } from './Albums';

export default combineReducers({
  Courses,
  Albums,
});