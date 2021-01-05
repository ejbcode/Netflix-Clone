import React from 'react';
import { profilesPics } from './profilesPics';

const ProfilePicsOptions = () => {
  console.log(profilesPics);
  return (
    <div>
      {profilesPics.map((pic) => (
        <>
          <p>{pic.id}</p>
          <img src={pic.url} alt="" />
        </>
      ))}
    </div>
  );
};

export default ProfilePicsOptions;
