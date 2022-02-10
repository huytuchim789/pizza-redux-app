import { signInWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { AppDispatch } from '../../app/store';
import { auth } from '../../firebase';
import { LoginState } from './Login';
import * as types from './LoginActionType';
export const loginStart = () => {
  return { type: types.LOGIN_START };
};
export const loginSuccess = (user: UserCredential) => {
  return { type: types.LOGIN_SUCCESS, payload: user };
};
export const loginFail = (error: any) => {
  return { type: types.LOGIN_FAIL, payload: error };
};
export const loginInitiate = (email: string, password: string) => {
  return function (dispatch: AppDispatch) {
    dispatch(loginStart());
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential: UserCredential) => {
        dispatch(loginSuccess(userCredential));
      })
      .catch((e) => {
        dispatch(loginFail(e));
      });
  };
};
