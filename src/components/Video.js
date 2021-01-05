import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const VideoStyle = styled.div`
  animation: test 20s;

  @keyframes test {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 100;
    }
    90% {
      opacity: 100;
    }
    100% {
      opacity: 0;
    }
  }
  .video-responsive {
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
    z-index: 0;
  }

  iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`;

const YoutubeEmbed = ({ embedId }) => (
  <VideoStyle>
    <div className="video-responsive">
      <iframe
        src={`https://www.youtube.com/embed/${embedId}?autoplay=1&mute=1&controls=0&playsinline=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  </VideoStyle>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
