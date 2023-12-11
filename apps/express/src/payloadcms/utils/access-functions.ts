import { UserRoles } from '../UserRoles';

/**
 * Allow only logged-in users
 *
 * @param req
 */
export const accessLoggedIn = ({ req }) => {
  return Boolean(req.user);
};

/**
 * Only allow admins to access a collection
 *
 * @param req
 * @param data
 */
export const accessAdminOnly = ({ req }): boolean => {
  const { user } = req;

  if (!accessLoggedIn({ req })) return false;

  return user?.roles?.includes(UserRoles.admin) ?? false;
};

/**
 * Entire actions that can be taken on a collection are
 * restricted to admin only
 */
export const allAccessAdminOnly = {
  read: accessAdminOnly,
  create: accessAdminOnly,
  delete: accessAdminOnly,
  update: accessAdminOnly,
  readVersions: accessAdminOnly,
};

export const adminPanelOnlyAdmins = (args?) => {
  const { req } = args;
  const isAdmin = accessAdminOnly({ req });

  return Boolean(isAdmin);
};
