import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
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
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
      position: absolute;
    }
  }
`;

export const SearchInput = () => {
  const [openSearch, setOpenSearch] = useState(false);

  const handleClick = () => {
    setOpenSearch(!openSearch);
  };

  const { formValues, handleInputChange, handleInputReset } = useForm({
    search: '',
  });

  return (
    <FormStyle>
      <div
        className="search"
        onClick={handleClick}
        aria-hidden="true"
        role="button"
        tabIndex="0"
      >
        <input
          name="search"
          className={`input ${openSearch ? 'active' : ''}`}
          type="text"
          placeholder="Titles, people, genres"
          value={search}
          onChange={handleInputChange}
        />

        <AiOutlineSearch className="icon" />
        <AiOutlineClose className="xtimes" onClick={handleInputReset} />
      </div>
    </FormStyle>
  );
};
