import React from 'react';
import { toast } from 'react-toastify';

import Toast from '../../components/atom/toast/Toast';

toast.configure();

export default {
  title: 'Toastr',
  component: toast
};

export const Success = () => {
  const notify = () =>
    toast.success(<Toast description="Done!" buttonText="Entendido" success />);

  return (
    <>
      <button onClick={notify}>Notify !</button>
    </>
  );
};

export const Error = () => {
  const notify = () =>
    toast.error(
      <Toast description="Something went wrong!" buttonText="Error" error />
    );

  return <button onClick={notify}>Notify !</button>;
};

export const Warning = () => {
  const notify = () =>
    toast.warn(<Toast description="Warning" buttonText="Warn!" warning />);

  return <button onClick={notify}>Notify !</button>;
};

export const Info = () => {
  const notify = () =>
    toast.info(<Toast description="I got an info" buttonText="Info!" info />);

  return <button onClick={notify}>Notify !</button>;
};
