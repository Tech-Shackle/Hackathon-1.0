import React, { useState } from 'react';

export const useForm: (
  initialValues: any
) => [
  any,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  React.Dispatch<any>
] = (initialValues: any) => {
  const [data, setData] = useState(initialValues);

  return [
    data,
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setData({ ...data, [e.target.name]: e.target.value }),
    setData,
  ];
};
