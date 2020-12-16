import { useState } from 'react';

export const useForm = (initialState = {}) => {
  const [formValues, setformValues] = useState(initialState);

  const handleInputChange = (event) => {
    setformValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleInputReset = () => {
    setformValues(initialState);
  };

  return { formValues, handleInputChange, handleInputReset };
};
