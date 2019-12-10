import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  addCourse: ['title'],
});

export const UserInfoTypes = Types;
export default Creators;

const INITIAL_STATE = {
  data: [
    'React Native',
    'React JS',
    'NodeJS',
  ],
};

const addCourse = (state = INITIAL_STATE, action) => {
  return { 
    ...state,
    data: [ 
      ...state.data,
      action.title 
    ],
  };
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_COURSE]: addCourse,
});