import { User } from '../payload-types';

export type IUser = Pick<
  User,
  | 'id'
  | 'firstName'
  | 'username'
  | 'lastName'
  | 'roles'
  | 'updatedAt'
  | 'createdAt'
  | 'email'
>;
