import { registerPath as rp } from './register';
import { verifyAccountPath as vap } from './register';

export { register, verifyAccount } from './register';

const base = 'auth';

export const registerPath = `/${base}/${rp}`;
export const verifyPath = `/${base}/${vap}`;
