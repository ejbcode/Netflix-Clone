import { firebase, googleAuthProvider } from '../../../firebase/firebaseConfig';
import { types } from '../types';

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});

export const logWithGoogle = () => (dispatch) => {
  console.log('action log with google');

  firebase
    .auth()
    .signInWithPopup(googleAuthProvider)
    .then(({ user }) => {
      dispatch(login(user.uid, user.displayName));
    });
};

export const logout = () => ({
  type: types.logout,
});

export const testx = () => ({
  type: types.test,
});

export const logoutFromFirebase = () => async (dispatch) => {
  await firebase.auth().signOut();

  dispatch(logout());
};
