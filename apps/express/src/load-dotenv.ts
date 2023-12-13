import dotenv from 'dotenv';
import path from 'path';

export const loadDotenv = () => {
  if (dotenv && dotenv.config) {
    dotenv.config({
      path: path.resolve(path.join(process.cwd(), 'apps/express/.env.local')),
    });
  }
};
