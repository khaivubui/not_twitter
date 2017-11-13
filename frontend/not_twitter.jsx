import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = {
    session: {
      currentUser: null,
    }
  };

  const store = configureStore(preloadedState);
  if (process.env.NODE_ENV !== 'production') {
    window.store = store;
  }

  ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root')
  );
});
