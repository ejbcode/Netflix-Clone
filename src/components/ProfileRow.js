import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { profiles } from './profiles';
import { setProfile } from './redux/actions/authAction';

const ProfileRowStyle = styled.div``;

export const ProfileRow = () => {
  const history = useHistory();

  const { name } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  console.log(history.location.pathname);

  const handleClick = (item) => {
    dispatch(setProfile(item));
    if (history.location.pathname === '/who') {
      history.push('/');
    }
  };

  return (
    <ProfileRowStyle className="profile-row">
      {profiles.map((item) => (
        <div
          onClick={() => handleClick(item)}
          onKeyPress={handleClick}
          role="button"
          tabIndex="0"
          key={item.id}
        >
          <li>
            <div className="image-wrapper">
              <img src={`../assets/avatar${item.id}.png`} alt="logo avatar" />
            </div>
            <p>{name}</p>
          </li>
        </div>
      ))}
    </ProfileRowStyle>
  );
};
