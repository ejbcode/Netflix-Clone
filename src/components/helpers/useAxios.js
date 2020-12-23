import { useEffect, useState } from 'react';
import axiosInstance from './axiosInstance';

const useAxiosInstance = ({ url }) => {
  const [media, setMedia] = useState(null);

  // const { titleSection, url } = data.data;
  useEffect(() => {
    axiosInstance(url).then((response) => setMedia(response.data.results));
  }, [url]);

  return media;
};

export default useAxiosInstance;
