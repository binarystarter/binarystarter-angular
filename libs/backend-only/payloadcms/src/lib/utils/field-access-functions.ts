import { FieldAccess } from 'payload/types';
import { accessAdminOnly, accessLoggedIn } from './access-functions';

/**
 * Only allow admins to do the action on a field
 *
 * @param req
 */
export const fieldAccessAdminOnly: FieldAccess = ({ req }) => {
  const isAdmin = accessAdminOnly({ req });

  if (isAdmin === true) {
    return true;
  } else return false;
};

/**
 * Allow users or admins to do actions on a user field
 *
 * @param req
 * @param id
 */
export const fieldAccessAdminOrMeOnly: FieldAccess = ({ req }) => {
  const isLoggedIn = accessLoggedIn({ req });
  const isAdmin = accessAdminOnly({ req });

  if (isLoggedIn !== true) return false;
  if (isAdmin === true) return true;

  return fieldAccessMeOnly({ req });
};

/**
 * Allow users to do an action only by themselves
 *
 * @param req
 * @param id
 */
export const fieldAccessMeOnly: FieldAccess = ({ req, id }) => {
  const { user } = req;

  if (!user) return false;

  return user.id && id && user.id === id;
};
