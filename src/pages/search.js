import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import axiosInstance from '../components/helpers/axiosInstance';
import Loader from '../components/Loader';
import MediaDetail from '../components/MediaDetail';
import { showDetail } from '../components/redux/actions/mediaAction';

// const SearchDivStyle = styled.div`
//   padding-top: 5rem;
//   margin: 0 auto;
//   width: 95%;
//   span {
//     font-weight: bold;
//     font-size: 2rem;
//     margin-left: 1rem;
//   }
// `;

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

export const Search = (params) => {
  const { id, isModalOpened } = useSelector((state) => state.media);
  const searchQuery = params.location.search.slice(3);
  const [media, setMedia] = useState(null);
  const url = `search/movie?language=en-US&query=${searchQuery}&page=1&include_adult=false`;

  useEffect(() => {
    axiosInstance(url).then((response) => setMedia(response.data.results));
  }, [url]);
  console.log(media);

  const dispatch = useDispatch();

  const handleClick = (event, value) => {
    event.preventDefault();
    dispatch(showDetail(value));
  };

  return (
    <>
      {isModalOpened && <MediaDetail id={id} />}
      <FavoriteGridStyle>
        <h2>My List</h2>
        {!media && <Loader />}
        <div className="grid">
          {media.map((favMedia) => (
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
    </>
  );
};
