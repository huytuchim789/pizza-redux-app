import { LoginState } from './Login';
import * as types from './LoginActionType';
import { UserCredential } from 'firebase/auth';

export interface LoginInterface {
  loading: boolean;
  currentUser: UserCredential | null;
  error: string | null;
}
const initialLogin: LoginInterface = {
  loading: false,
  currentUser: null,
  error: null,
};

const LoginReducer = (state = initialLogin, action: any) => {
  switch (action.type) {
    case types.LOGIN_START:
      return { ...state, loading: true };
    case types.LOGIN_SUCCESS:
      console.log('here');

      return { ...state, loading: false, currentUser: action.payload };
    case types.LOGIN_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
export default LoginReducer;
