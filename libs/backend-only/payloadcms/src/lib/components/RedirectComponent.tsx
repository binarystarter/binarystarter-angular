import {
  AuthPaths,
  sharedEnvironment,
} from '@binarystarter-angular/shared-constants';
import React from 'react';

const url = sharedEnvironment.web.url;

export const RedirectToFrontendLogoutButton = () => {
  const redirectToWeb = () => {
    window.location.href = `${url}${AuthPaths.logout}`;
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
  window.location.href = `${url}${AuthPaths.login}`;

  return <></>;
};
