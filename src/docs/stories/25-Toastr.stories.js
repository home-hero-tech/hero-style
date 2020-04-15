import React from 'react';
import { toast } from 'react-toastify';

toast.configure();

export default {
  title: 'Toastr',
  component: toast
};

export const Success = () => {
  const notify = () => toast.success('Message!');

  return <button onClick={notify}>Notify !</button>;
};

export const Error = () => {
  const notify = () => toast.error('Message!');

  return <button onClick={notify}>Notify !</button>;
};

export const Warning = () => {
  const notify = () => toast.warn('Message!');

  return <button onClick={notify}>Notify !</button>;
};

export const Info = () => {
  const notify = () => toast.info('Message!');

  return <button onClick={notify}>Notify !</button>;
};
