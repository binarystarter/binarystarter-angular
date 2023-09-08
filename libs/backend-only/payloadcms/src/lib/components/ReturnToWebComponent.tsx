import React from 'react';

export const ReturnToWebComponent = () => {
  const redirectToWeb = () => {
    window.location.href = `http://localhost:4200/auth/login`;
  };

  return (
    <a onClick={redirectToWeb} style={{ cursor: 'pointer' }}>
      <b>
        <p>Frontend Home</p>
      </b>
    </a>
  );
};
