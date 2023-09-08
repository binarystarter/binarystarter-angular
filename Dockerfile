###################
# DEVELOPMENT
###################
FROM node:18 as development
WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y python3

# Set NODE_ENV environment variable
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

COPY --chown=node:node pnpm-lock.yaml ./
COPY --chown=node:node package.json ./

RUN npm install -g pnpm

RUN apt-get update && apt-get install -y python3

ARG PAYLOAD_CONFIG_PATH="/usr/src/app/apps/express/payload.config.ts"
ENV PAYLOAD_CONFIG_PATH=${PAYLOAD_CONFIG_PATH}

RUN pnpm install

COPY --chown=node:node . .

USER node

###################
# BUILD
###################
FROM node:18 as build

WORKDIR /usr/src/app

COPY --chown=node:node pnpm-lock.yaml ./
COPY --chown=node:node package.json ./

# In order to run `npm run build` we need access to the Nest CLI which is a dev dependency. In the previous development
# stage we ran `npm ci` which installed all dependencies, so we can copy over the node_modules directory from the
# development image
COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules

COPY --chown=node:node . .

# Run the build command which creates the production bundle
RUN pnpm run build:api

# Set NODE_ENV environment variable
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Remove the development install and reinstall using production environment
RUN rm -rf node_modules && pnpm install --prod --frozen-lockfile && pnpm cache clean

USER node

###################
# PRODUCTION
###################

FROM node:18 as production

# Set NODE_ENV environment variable
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
ARG PAYLOAD_CONFIG_PATH="dist/apps/express/payload.config.js"
ENV PAYLOAD_CONFIG_PATH=${PAYLOAD_CONFIG_PATH}

COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist
COPY --chown=node:node --from=build /usr/src/app/dist ./dist/dist

USER node

CMD ["node", "dist/apps/express/main.js"]