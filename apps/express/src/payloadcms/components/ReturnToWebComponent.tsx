import { AuthPaths, webUrl } from '@binarystarter-angular/shared-constants';
import React from 'react';

export const ReturnToWebComponent = () => {
  const redirectToWeb = () => {
    window.location.href = `${webUrl}${AuthPaths.login}`;
  };

  return (
    <a onClick={redirectToWeb} style={{ cursor: 'pointer' }}>
      <b>
        <p>Frontend Home</p>
      </b>
    </a>
  );
};
