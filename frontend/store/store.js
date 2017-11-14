import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reduxPromise from 'redux-promise';

import RootReducer from '../reducers/root_reducer';

const authMiddleWare = store => next => action => {
  const data = action.payload.data;
  if (data && data.user) {
    
  }
  next(action);
};

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(reduxPromise, authMiddleWare, logger)
  )
);

export default configureStore;
