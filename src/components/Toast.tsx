import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
  show: boolean;
  isError: boolean;
  toastMsg: string;
}

const Toast = ({ show, isError, toastMsg }: Props) => {
  if (show) {
    return (
      <Snackbar className={isError ? 'toast-error' : 'toast'}>
        {toastMsg}
      </Snackbar>
    );
  } else {
    return <div></div>;
  }
};

const Snackbar = styled.div`
  min-width: 250px; /* Set a default minimum width */
  margin-left: -125px; /* Divide value of min-width by 2 */
  background-color: #333; /* Black background color */
  color: #fff; /* White text color */
  text-align: center; /* Centered text */
  border-radius: 2px; /* Rounded borders */
  padding: 16px; /* Padding */
  position: fixed; /* Sit on top of the screen */
  z-index: 1; /* Add a z-index if needed */
  left: 50%; /* Center the snackbar */
  bottom: 200px; /* 50px from the bottom */
  &.toast-error {
    background: #802a19;
  }
`;

export default Toast;
