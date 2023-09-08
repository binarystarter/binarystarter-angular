import React from 'react';

export const RedirectToFrontendLogoutButton = () => {
  const redirectToWeb = () => {
    window.location.href = `http://localhost:4200/auth/logout`;
  };

  return (
    <a onClick={redirectToWeb} style={{ cursor: 'pointer' }}>
      <b>
        <p>Logout</p>
      </b>
    </a>
  );
};
export const RedirectToFrontendLogin = () => {
  window.location.href = `http://localhost:4200/auth/login`;

  return <></>;
};
