import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Loader from './Loader';
import MediaDetail from './MediaDetail';
import { showDetail } from './redux/actions/mediaAction';

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

const GridMedia = (media) => {
  const dispatch = useDispatch();
  const { id, isModalOpened } = useSelector((state) => state.media);

  const handleClick = (event, value) => {
    event.preventDefault();
    dispatch(showDetail(value));
  };
  return (
    <>
      <p>hola</p>
      {isModalOpened && <MediaDetail id={id} />}
      <FavoriteGridStyle>
        <h2>My List</h2>
        {media.lentgh === 0 ? (
          <Loader />
        ) : (
          <div className="grid">
            {media?.map((favMedia) => (
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
        )}
      </FavoriteGridStyle>
    </>
  );
};

export default GridMedia;
