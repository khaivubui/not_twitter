import { LOGIN } from '../components/auth/login';
import { REGISTER } from '../components/auth/register';
import { GET_USER, LOGOUT } from '../components/general/nav';

const nullUser = {
  currentUser: null
};

const sessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case LOGIN:
    case REGISTER:
    case GET_USER:
      const data = action.payload.data;
      if (data) {
        return {currentUser: data.user};
      } else {
        return nullUser;
      }
    case LOGOUT:
      return nullUser;
    default:
      return state;
  }
};

export default sessionReducer;
