import { CollectionConfig } from 'payload/types';
import { allAccessAdminOnly } from '../utils/access-functions';

export const PagesCollection: CollectionConfig = {
  slug: 'pages',
  admin: {
    defaultColumns: ['title', 'tags', 'status'],
    useAsTitle: 'title',
  },
  access: {
    ...allAccessAdminOnly,
  },

  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'publishedDate',
      type: 'date',
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tags',
      hasMany: true,
    },
    {
      name: 'content',
      type: 'richText',
    },
    {
      name: 'status',
      type: 'select',
      options: [
        {
          value: 'draft',
          label: 'Draft',
        },
        {
          value: 'published',
          label: 'Published',
        },
      ],
      defaultValue: 'draft',
      admin: {
        position: 'sidebar',
      },
    },
  ],
};
