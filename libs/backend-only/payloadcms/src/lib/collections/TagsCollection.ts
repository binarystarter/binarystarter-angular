import { CollectionConfig } from 'payload/types';
import { allAccessAdminOnly } from '../utils/access-functions';

export const TagsCollection: CollectionConfig = {
  slug: 'tags',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    ...allAccessAdminOnly,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],
  timestamps: false,
};
