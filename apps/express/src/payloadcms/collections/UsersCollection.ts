import { CollectionConfig } from 'payload/types';
import { UserRoles, UserRolesLabels } from '../UserRoles';
import { Access } from 'payload/config';
import {
  accessAdminOnly,
  adminPanelOnlyAdmins,
} from '../utils/access-functions';
import {
  fieldAccessAdminOnly,
  fieldAccessAdminOrMeOnly,
  fieldAccessMeOnly,
} from '../utils/field-access-functions';
import { AuthPaths } from '@binarystarter-angular/shared-constants';
import { useInfrastructure } from '../../utils/use-infrastructure';

const { configuration } = useInfrastructure();

/**
 * Only allow users that have admin role or those that
 * try to update their own profiles.
 *
 * @param req
 * @param data
 * @param id
 */
export const accessAdminOrMeOnly: Access = ({ req, id }) => {
  const { user } = req;

  if (accessAdminOnly({ req })) return true;

  return user && id && user.id === id;
};

export const usersSlug = 'users';

const collection: CollectionConfig = {
  slug: usersSlug,
  auth: {
    depth: 0,
    tokenExpiration: 1296000,
    maxLoginAttempts: 5,
    verify: {
      generateEmailSubject: () => {
        return `Verify your email address for ${configuration.app.name}`;
      },
      generateEmailHTML: ({ token, user }) => {
        // Use the token provided to allow your user to verify their account
        const url = `${configuration.web.url}${AuthPaths.verify}?token=${token}`;

        return `
        <div style="font-family: Roboto, Helvetica, Arial, sans-serif">
           <p style="margin-top: 10px;">Hi ${user.firstName} ${user.lastName}.</p>
           <p style="margin-top: 10px;">Please click the following link to verify that we have the right email for you ${url}</p>
         </div>
        
        `;

        return ``;
      },
    },
    forgotPassword: {
      generateEmailHTML: ({ token }) => {
        const url = `${configuration.web.url}${AuthPaths.reset}/${token}`;

        return ` 
         <div style="font-family: Roboto, Helvetica, Arial, sans-serif">
           <p style="margin-top: 10px;">Hi,</p>
           <p style="margin-top: 10px;">You are receiving this because you (or someone else) have requested the reset of the password for your account.</p>
           <p style="margin-top: 10px;">Please click on the following link, or paste this into your browser to complete the process: ${url}</p> 
           <p style="margin-top: 10px;">If you did not request this, please ignore this email and your password will remain unchanged.</p>
         </div>
        `;
      },
    },
  },
  admin: {
    useAsTitle: 'email',
  },
  access: {
    admin: adminPanelOnlyAdmins,

    /**
     * Allow only admins or users that want to see their own profile
     * @param req
     * @param id
     */
    read: accessAdminOrMeOnly,
    update: accessAdminOrMeOnly,
    delete: () => false,
    unlock: accessAdminOnly,
    create: () => true,
  },
  fields: [
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'firstName',
      type: 'text',
      required: true,
    },
    {
      name: 'lastName',
      type: 'text',
      required: true,
    },
    {
      name: 'username',
      type: 'text',
      required: true,
      access: {
        read: () => true,
        update: () => false,
        create: () => true,
      },
    },
    {
      name: 'roles',
      saveToJWT: true,
      type: 'select',
      hasMany: true,
      defaultValue: [UserRoles.user],
      required: true,
      admin: {
        hidden: true,
      },
      access: {
        read: () => true,
        update: fieldAccessAdminOnly,
        create: fieldAccessAdminOnly,
      },
      options: [
        {
          label: UserRolesLabels[UserRoles.admin],
          value: UserRoles.admin,
        },
        {
          label: UserRolesLabels[UserRoles.user],
          value: UserRoles.user,
        },
      ],
    },
  ],
};

export const UsersCollection = collection;
