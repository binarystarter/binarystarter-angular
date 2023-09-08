import { buildConfig } from 'payload/config';
import * as path from 'path';
import {
  CategoriesCollection,
  PagesCollection,
  PostsCollection,
  RedirectToFrontendLogin,
  RedirectToFrontendLogoutButton,
  ReturnToWebComponent,
  TagsCollection,
  UsersCollection,
} from '@binarystarter-angular/backend-only/payloadcms';
import dotenv from 'dotenv';

dotenv.config({
  path: '../../.env',
});

export default buildConfig({
  serverURL: process.env.api_url,
  collections: [
    UsersCollection,
    CategoriesCollection,
    PagesCollection,
    PostsCollection,
    TagsCollection,
  ],
  rateLimit: {
    window: 90000,
    max: 500,
    trustProxy: true,
  },
  admin: {
    user: UsersCollection.slug,
    buildPath: path.resolve('../../dist/payload'),
    meta: {
      titleSuffix: process.env.app_name || '',
      favicon: `${process.env.web_url}/assets/favicon.ico`,
    },
    components: {
      beforeNavLinks: [ReturnToWebComponent],
      logout: {
        Button: RedirectToFrontendLogoutButton,
      },
      routes: [
        {
          Component: RedirectToFrontendLogin,
          path: '/login',
        },
      ],
    },
    webpack: (config) => ({
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config?.resolve?.alias,
          '@binarystarter-angular/backend-only/crypto': [
            path.resolve('../../libs/backend-only/crypto/src'),
          ],
          '@binarystarter-angular/backend-only/payloadcms': [
            path.resolve('../../libs/backend-only/payloadcms/src'),
          ],
          '@binarystarter-angular/shared-types': [
            path.resolve('../../libs/shared-types/src'),
          ],
          '@binarystarter-angular/backend-only/utils': [
            path.resolve('../../libs/backend-only/utils/src'),
          ],
        },
      },
    }),
  },
  cors: [process.env.web_url, process.env.api_url],
  csrf: [process.env.web_url],
  typescript: {
    outputFile: path.resolve(
      '../',
      '../',
      'libs',
      'shared-types',
      'src',
      'payload-types.ts',
    ),
  },
  graphQL: {
    schemaOutputFile: path.resolve(
      '../',
      '../',
      'libs',
      'shared-types',
      'src',
      'generated-schema.graphql',
    ),
  },
  plugins: [],
});
