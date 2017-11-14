import { LOGIN } from '../components/auth/login';

const nullUser = {
  currentUser: null
};

const sessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case LOGIN:
      const data = action.payload.data;
      if (data) {
        return {currentUser: data.user};
      } else {
        return nullUser;
      }
    default:
      return state;
  }
};

export default sessionReducer;
