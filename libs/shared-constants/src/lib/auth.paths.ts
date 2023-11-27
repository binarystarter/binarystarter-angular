import { SpaPathsBase } from './spa.paths';

const base = `${SpaPathsBase}/auth`;

export const AuthPaths = {
  base,
  login: `${base}/login`,
  register: `${base}/register`,
  forgotPassword: `${base}/forgot-password`,
  verify: `${base}/verify`,
  logout: `${base}/logout`,
  reset: `${base}/reset`,
};
