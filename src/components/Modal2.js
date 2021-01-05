import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ModalStyle = styled.div`
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    z-index: 9999;
    overflow-y: auto;
    z-index: 110;
  }

  .modal.disable-click::after {
    position: absolute;

    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 10;
    content: '';
  }

  .modal__bg {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    opacity: 0;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .modal__inner {
    position: relative;
    background-color: #181818;
    max-width: 850px;
    width: 90%;
    opacity: 0;
    transition-property: opacity, top;
    transition-timing-function: ease;
    box-shadow: 0 0 100x rgba(0, 0, 0, 0.6);
    border-radius: 0.5rem;
    overflow: hidden;
    z-index: 1000000;
    margin: 3rem auto;
  }

  .btnModal {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    margin: 0;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #181818;
    color: #fff;
    border-radius: 50%;
    z-index: 9999;
  }
`;

/* eslint-disable */
const Modal2 = ({children, onClose }) => {
  const modal = useRef();
  const modalBg = useRef();
  const modalContent = useRef();
  const duration = 300;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    modal.current.classList.add('disable-click');
    modalBg.current.style.transitionDuration = `${duration}ms`;
    modalContent.current.style.transitionDuration = `${duration}ms`;

    setTimeout(() => {
      modalBg.current.style.opacity = 0.8;
      modalContent.current.style.opacity = 1;
      modalContent.current.style.top = 0;
    }, 20);

    setTimeout(() => {
      modal.current.classList.remove('disable-click');
    }, duration + 20);

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [duration]);

  const modalCloseHandler = (e) => {
    e.preventDefault();

    modal.current.classList.add('disable-click');
    modalBg.current.style.opacity = 0;
    modalContent.current.style.opacity = 0;
    modalContent.current.style.top = '-100px';

    setTimeout(() => {
      modal.current.classList.remove('disable-click');
      onClose();
    }, duration);
  };

  return (
    <ModalStyle>
      <div className="modal" ref={modal}>
        <div
          className="modal__bg"
          onClick={(e) => modalCloseHandler(e)}
          ref={modalBg}
          aria-hidden
        />
        <div className="modal__inner" ref={modalContent}>
          <button
            type="button"
            className="btnModal"
            onClick={(e) => modalCloseHandler(e)}
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    </ModalStyle>
  );
};

// Modal.propTypes = {
//   title: PropTypes.string.isRequired,
//   children: PropTypes.node,
//   onClose: PropTypes.func.isRequired,
//   duration: PropTypes.number,
//   showCloseBtn: PropTypes.bool,
// };

export default Modal2;
