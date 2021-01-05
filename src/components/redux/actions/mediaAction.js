import { toast } from 'react-toastify';
import { db } from '../../../firebase/firebaseConfig';
import { types } from '../types';

export const showDetail = (id) => ({
  type: types.showDetail,
  payload: id,
});

export const hideDetail = () => ({
  type: types.hideDetail,
});

export const addFavorites = (media) => ({
  type: types.addFavorites,
  payload: media,
});

export const addMediaInFirestore = (media) => {
  console.log('');
  return (dispatch, getState) => {
    const { uid } = getState().auth;
    db.collection(`users/${uid}/myList`)
      .doc(`${media.id}`)
      .set({
        original_title: media.original_title,
        poster_path: media.poster_path,
        date: Date.now(),
      })
      .then(function () {
        toast(`Add ${media.original_title} to favorites`, {
          type: 'success',
          position: 'top-center',
          autoClose: 2000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch(function (error) {
        console.error('Error writing document: ', error);
      });
  };
};
