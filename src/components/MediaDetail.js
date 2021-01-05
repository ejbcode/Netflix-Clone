import React, { useEffect, useState } from 'react';
import { MdStar, MdTimer } from 'react-icons/md';
import styled from 'styled-components';
import { AiOutlinePlusCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import axiosInstance from './helpers/axiosInstance';
import { getYearFromRelease } from './helpers/getYearFromRelease';
import { useHours } from './helpers/useHours';
import Modal2 from './Modal2';
import YoutubeEmbed from './Video';
import { addMediaInFirestore, hideDetail } from './redux/actions/mediaAction';
import Loader from './Loader';

const MovieDetailStyle = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  z-index: 1000;

  .header_media {
    width: 100%;

    min-height: 300px;
    background: linear-gradient(to top, #181818 0%, transparent 30%),
      url(${(props) => props.bg});
    background-size: cover;
    background-position: center top;
    position: relative;
    img {
      max-width: 100%;
      height: auto;
      transition: ease-in-out 600ms;
    }
  }

  .header_media:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background: linear-gradient(to top, #181818 0%, transparent 30%);
    pointer-events: none;
  }

  .body_media {
    margin-top: -20rem;
    padding: 2rem 3rem;
    z-index: 2;
  }

  .tagline {
    font-style: italic;
    font-size: 1rem;
  }

  .buttons {
    display: flex;
    position: relative;
    align-items: center;
  }

  .button-play,
  .button-more {
    font-weight: bold;
    font-size: 1rem;
    padding: 0.4rem 1.4rem;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 1rem;
    opacity: 1;
    transition: all ease 0.2s;
    background-color: #fff;
    color: #000;
    cursor: pointer;
  }

  .button-play:hover {
    opacity: 0.7;
  }

  .buttons-circle {
    font-size: 2.5rem;
    background: rgba(0, 0, 0, 0.5);
    color: lightgray;
    border-radius: 50%;
  }

  .buttons-circle-tooltip {
    opacity: 0;
    background-color: lightgray;
    color: black;
    text-align: center;
    border-radius: 2px;
    padding: 0.5rem 1rem;
    position: absolute;
    z-index: 1;
    top: -3rem;
    left: 5rem;
    font-size: 1rem;
    transition: opacity 0.32s;
  }
  .buttons-circle:hover ~ .buttons-circle-tooltip {
    opacity: 1;
  }

  .media_description {
    display: flex;
    margin-top: 7rem;
  }

  .description {
    width: 65%;
  }
  .time {
    display: inline-block;
    margin-right: 1rem;
  }
  .vote {
    display: inline-block;
    margin-right: 1rem;
    color: yellow;
  }

  .cast-genres {
    width: 35%;
    font-size: 1.5rem;
    padding: 3.7rem 0 0 3rem;
    span {
      color: gray;
    }
  }
  .grid-similar {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  .similar-title {
    color: white;
    font-size: 1.4rem;
  }
  .similar-item {
    border-radius: 0.4rem;
    overflow: hidden;
    background: #2f2f2f;
  }

  .similar-item img {
    width: 100%;
  }
  .similar-item-description {
    padding: 0 1.3rem;
    font-size: 1.2rem;
    color: #d2d2d2;
  }

  @media screen and (min-width: 768px) {
    .title {
      font-size: 2.5rem;
    }

    .tagline {
      font-size: 1.5rem;
    }

    .button-play {
      font-size: 1.5rem;
    }

    .buttons-circle {
      font-size: 3.3rem;
    }
  }
`;

/* eslint-disable */

const MediaDetail = ({ id }) => {
  /* eslint-enable */
  const dispatch = useDispatch();
  const [media, setMedia] = useState(null);
  const [embedId, setEmbedId] = useState(null);

  const runtime = useHours(media?.runtime);
  const url = `/movie/${id}?language=en-US&append_to_response=videos,credits,similar_movies,images&include_image_language=en,null`;

  useEffect(() => {
    axiosInstance(url).then((response) => setMedia(response.data));
  }, [url]);

  if (!media) {
    return <Loader />;
  }

  const handleVideoClick = (videoId) => {
    setEmbedId(videoId);
    setTimeout(() => {
      setEmbedId(null);
    }, 20000);
  };

  function handleFavoriteClick() {
    const movieToAdd = {
      id: media.id,
      original_title: media.original_title,
      poster_path: media.poster_path,
    };
    // dispatch(addFavorites(movieToAdd));
    dispatch(addMediaInFirestore(movieToAdd));
  }
  console.log(media);

  return (
    <Modal2 onClose={() => dispatch(hideDetail())}>
      <MovieDetailStyle
        className="media"
        bg={`https://image.tmdb.org/t/p/original/${media.backdrop_path}`}
      >
        <div className="header_media">
          {embedId && <YoutubeEmbed embedId={embedId} />}
        </div>

        <div className="body_media">
          <div className="media_content">
            <div className="media_title">
              <h1 className="title">{media.title}</h1>

              <h3 className="tagline">&quot;{media.tagline}&quot;</h3>

              <div className="buttons">
                <div
                  className="button-play"
                  onClick={() => {
                    handleVideoClick(media.videos.results[0].key);
                  }}
                  aria-hidden
                >
                  ► Play
                </div>
                <AiOutlinePlusCircle
                  className="buttons-circle"
                  onClick={handleFavoriteClick}
                />
                <span className="buttons-circle-tooltip">Add to Favorites</span>
                <AiOutlineCheckCircle className="buttons-circle" />
              </div>
            </div>
            <div className="media_description">
              <div className="description">
                <p className="time">{getYearFromRelease(media.release_date)}</p>
                <p className="time">
                  <MdTimer /> {runtime}
                </p>
                <p className="vote">
                  <MdStar /> {media.vote_average}
                </p>

                <p>{media.overview}</p>
              </div>
              <div className="cast-genres">
                <p>
                  <span>Cast:</span>{' '}
                  {media.credits.cast
                    .map((item) => item.name)
                    .slice(0, 3)
                    .join(', ')}
                </p>
                <p>
                  <span>Genres:</span>{' '}
                  {media.genres.map((genre) => genre.name).join(', ')}
                </p>
              </div>
            </div>
            <div className="similar">
              <h3>More Like This</h3>
              <div className="grid-similar">
                {media.similar_movies.results
                  .map((movie) => (
                    <div className="similar-item" key={movie.id}>
                      <img
                        src={`https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`}
                        alt=""
                      />
                      <div className="similar-item-description">
                        <h4 className="similar-title">{movie.title}</h4>
                        <p className="time">
                          {getYearFromRelease(movie.release_date)}
                        </p>
                        <p className="vote">
                          <MdStar /> {movie.vote_average}
                        </p>
                        <p>{movie.overview.slice(0, 150)}</p>
                      </div>
                    </div>
                  ))
                  .slice(10)}
              </div>
            </div>
          </div>
        </div>
      </MovieDetailStyle>
    </Modal2>
  );
};

export default MediaDetail;
