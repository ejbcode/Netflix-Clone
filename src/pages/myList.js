import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Loader from '../components/Loader';
import MediaDetail from '../components/MediaDetail';
import ProfilePicsOptions from '../components/ProfilePicsOptions';
import { showDetail } from '../components/redux/actions/mediaAction';
import { db } from '../firebase/firebaseConfig';

const FavoriteGridStyle = styled.div`
  padding-top: 6rem;
  z-index: 1;
  .grid {
    margin: 0 auto;
    padding: 3rem 2rem 0;
    display: grid;
    gap: 0.8rem;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }

  .item {
    margin-bottom: 5rem;
    transition: 0.3s;
    :hover {
      transform: scale(1.2);
    }
  }
  img {
    height: 100%;
    width: 100%;
    border-radius: 0.7rem;
  }
`;

export const MyList = () => {
  const dispatch = useDispatch();
  const { id, isModalOpened } = useSelector((state) => state.media);

  const [favoriteMedia, setFavoriteMedia] = useState([]);

  const { uid } = useSelector((state) => state.auth);

  useEffect(() => {
    const getFavoriteMedia = async () => {
      db.collection(`users/${uid}/myList`)
        .orderBy('date', 'desc')
        .onSnapshot((querySnapshot) => {
          const docs = [];
          querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id });
          });
          setFavoriteMedia(docs);
        });
    };
    getFavoriteMedia();
  }, [uid]);

  const handleClick = (event, value) => {
    event.preventDefault();
    dispatch(showDetail(value));
  };

  return (
    <>
      {isModalOpened && <MediaDetail id={id} />}
      <FavoriteGridStyle>
        <h2>My List</h2>
        {!favoriteMedia && <Loader />}
        <div className="grid">
          {favoriteMedia.map((favMedia) => (
            <div
              className="item"
              onClick={(event) => handleClick(event, favMedia.id)}
              aria-hidden
            >
              <img
                src={`https://image.tmdb.org/t/p/w154/${favMedia.poster_path}`}
                alt=""
              />
            </div>
          ))}
        </div>
      </FavoriteGridStyle>
      <ProfilePicsOptions />
    </>
  );
};
