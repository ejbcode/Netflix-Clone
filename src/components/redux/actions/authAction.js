import Swal from 'sweetalert2';
import { firebase, googleAuthProvider } from '../../../firebase/firebaseConfig';
import { types } from '../types';

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});

export const setLoadingAuth = (loadingValue) => ({
  type: types.setLoadingAuth,
  payload: loadingValue,
});

export const setProfile = (id) => ({
  type: types.setProfile,
  payload: id,
});

export const logWithGoogle = () => (dispatch) => {
  firebase
    .auth()
    .signInWithPopup(googleAuthProvider)
    .then(({ user }) => {
      dispatch(login(user.uid, user.displayName));
    });
};

export const signUpWithEmailPasswordName = (name, email, password) => (
  dispatch
) => {
  dispatch(setLoadingAuth(true));

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(async ({ user }) => {
      await user.updateProfile({ displayName: name });
      dispatch(login(user.uid, user.displayName));
      dispatch(setLoadingAuth(false));
    })
    .catch((e) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: e,
      });
      dispatch(setLoadingAuth(false));
    });
};

export const signinWithEmailPassword = (email, password) => (dispatch) => {
  dispatch(setLoadingAuth(true));
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(({ user }) => {
      dispatch(login(user.uid, user.displayName));
      dispatch(setLoadingAuth(false));
    })
    .catch((e) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: e,
      });
      dispatch(setLoadingAuth(false));
    });
};

export const logout = () => ({
  type: types.logout,
});

export const setErrorMessage = (errorMessage) => ({
  type: types.setErrorMessage,
  payload: errorMessage,
});

export const logoutFromFirebase = () => async (dispatch) => {
  await firebase.auth().signOut();

  dispatch(logout());
};
