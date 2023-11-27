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
} from 'apps/express/src/payloadcms/src';
import { webpackBundler } from '@payloadcms/bundler-webpack';
import { slateEditor } from '@payloadcms/richtext-slate';
import { mongooseAdapter } from '@payloadcms/db-mongodb';

require('dotenv').config({
  path: '../../.env',
});

export default buildConfig({
  serverURL: process.env.api_url,
  db: mongooseAdapter({
    url: process.env.mongo_url,
    connectOptions: {
      user: process.env.mongo_username,
      pass: process.env.mongo_password,
      dbName: process.env.mongo_db,
    },
  }),
  editor: slateEditor({}),
  collections: [
    UsersCollection,
    CategoriesCollection,
    PagesCollection,
    PostsCollection,
    TagsCollection,
  ],
  routes: {
    admin: '/admin',
    api: '/api',
    graphQL: '/graphql',
    graphQLPlayground: '/playground',
  },
  rateLimit: {
    window: 90000,
    max: 500,
    trustProxy: true,
  },
  admin: {
    user: UsersCollection.slug,
    buildPath: path.resolve(__dirname, '../../dist/payload'),
    meta: {
      titleSuffix: process.env.app_name || '',
      favicon: `${process.env.web_url}/assets/favicon.ico`,
    },
    components: {
      beforeNavLinks: [ReturnToWebComponent],
      logout: {
        Button: RedirectToFrontendLogoutButton,
      },
      views: {
        'redirect-to-frontend-login': {
          Component: RedirectToFrontendLogin,
          path: '/login',
        },
      },
    },
    bundler: webpackBundler(),
    webpack: (config) => ({
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config?.resolve?.alias,
          // '@binarystarter-angular/backend-only/crypto': [
          //   path.resolve('../../libs/backend-only/crypto/src'),
          // ],
          // '@binarystarter-angular/backend-only/payloadcms': [
          //   path.resolve('../../libs/backend-only/payloadcms/src'),
          // ],
          // '@binarystarter-angular/shared-types': [
          //   path.resolve('../../libs/shared-types/src'),
          // ],
          // '@binarystarter-angular/shared-constants': [
          //   path.resolve('../../libs/shared-constants/src'),
          // ],
          // '@binarystarter-angular/backend-only/utils': [
          //   path.resolve('../../libs/backend-only/utils/src'),
          // ],
        },
      },
    }),
  },
  cors: [process.env.web_url, process.env.api_url],
  csrf: [process.env.web_url],
  typescript: {
    declare: false,
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
