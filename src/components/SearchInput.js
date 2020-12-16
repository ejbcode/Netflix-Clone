import React, { useRef, useState } from 'react';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useForm } from './helpers/useForm';

const FormStyle = styled.form`
  position: relative;

  .search {
    right: 0px;
    top: -1.8rem;
    display: inline-block;
    position: absolute;

    .input {
      opacity: 0;
      width: 0px;
      height: 34px;
      background-color: rgba(0, 0, 0, 0.6);
      color: #fff;
      border: none;
      outline: none;
      padding-left: 35px;
      font-size: 1.5rem;
      transition: 0.3s ease all;
      ::placeholder {
        color: white;
        opacity: 0.8;
      }
      &.active {
        border: 1px solid #fff;
        width: 245px;
        opacity: 1;
      }
    }

    .icon {
      font-size: 2rem;
      width: 18px;
      left: 8px;
      top: 50%;
      transform: translateY(-50%);
      position: absolute;
    }
    .xtimes {
      font-size: 2rem;
      width: 18px;
      right: -80px;
      top: 50%;
      transform: translateY(-50%);
      position: absolute;
    }

    .xtimes-active {
      font-size: 2rem;
      width: 18px;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
      position: absolute;
      pointer-events: initial;
    }
  }
`;

export const SearchInput = () => {
  const history = useHistory();

  const [openSearch, setOpenSearch] = useState(false);

  const searchInput = useRef(null);

  const handleClick = () => {
    setOpenSearch(!openSearch);
    searchInput.current.focus();
  };

  const { formValues, handleInputChange, handleInputReset } = useForm({
    search: '',
  });
  const { search } = formValues;

  const handleSubmit = (event) => {
    event.preventDefault();
    // if (history.location.pathname !== '/search') {
    //   history.push(`/search?q=${search}`);
    // }
    history.push(`/search?q=${search}`);
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <div
        className="search"
        onClick={handleClick}
        aria-hidden="true"
        role="button"
      >
        {/* eslint-disable */}
        <input
          name="search"
          aria-hidden="true"
          className={`input ${openSearch ? 'active' : ''}`}
          type="text"
          placeholder="Titles, people, genres"
          value={search}
          onChange={handleInputChange}
          tabIndex="0"
          autoFocus
          ref={searchInput} 
        />

        <AiOutlineSearch className="icon" />
        <AiOutlineClose
          className={`xtimes ${openSearch ? 'xtimes-active' : ''}`}
          onClick={handleInputReset}
        />
      </div>
    </FormStyle>
  );
};
