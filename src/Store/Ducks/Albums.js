import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  updateAlbums: ['data'],
});

export const UserInfoTypes = Types;
export default Creators;

const INITIAL_STATE = {
  data: [],
};

const updateAlbums = (state = INITIAL_STATE, action) => {
  return { 
    ...state,
    data: action.data
  };
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.UPDATE_ALBUMS]: updateAlbums,
});