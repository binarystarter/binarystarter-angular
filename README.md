# Angular 17, Payload CMS, ExpressJs - Free Open-Source Full-Stack Boilerplate

## ✨ Professional Web Application Development Starter without the complexity.

Monorepository, Secure, Stable, Automated. **[VIEW DEMO](https://binarystarter.com)**

For full documentation refer to [**Documentation**](https://binarystarter.com/documentation).

<div style="display: flex; flex-direction: row; justify-content: space-between;">
      <img src="https://binarystarter.com/assets/images/github-1.png" width="100%" style="width: '100%'; height: auto;"/>
</div>

## Do you need AWS / Self-hosted VPS automated deployment?

Using infrastructure as code, the infrastructure gets automatically based on typescript source code, using Pulumi. (https://www.pulumi.com/)

[**Read more**](https://binarystarter.com/pro)

## Features out of the box

- Shared Types between the Backend and Frontend
- Angular Client App running on _http://localhost:4200_
- ExpressJs Server API & PayloadCMS running on _http://localhost:8080_
- PayloadCMS Administration Panel _http://localhost:8080/admin_
- Angular 17+ Server Side Rendering and Single Page App with Dashboard
- Authentication
- Authorization
- Shared authentication between API, Client and PayloadCMS Admin
- Client App Dashboard available under _http://localhost:4200/c/\*_ (authentication is required). Lazy loaded.
- Standalone Components

## Tech-Stack

Latest stable versions are used. The repository is kept up to date and maintained by [Florin Mateescu](https://twitter.com/florinmtsc).

- Node v20
- Payload CMS v2
- Angular 17
- Nx.dev v17
- Monorepository managed by Nx.dev
- ExpressJs API with Payload CMS (headless open-source CMS) integrated
- Angular with SSR (Server-Sider-Rendering) and SPA (Single Page App)
- Angular Standalone Components
- I18n
- TailwindCSS
- Angular Material
- Pnpm, esbuild

<br/>

<img alt="Payload, Angular, Express" src="https://binarystarter.com/assets/images/angular/dashboard-payload.png" width="422px"/>

<br/>

# Installation

For full documentation refer to → [**DOCUMENTATION**](https://binarystarter.com/documentation).

Let’s get started! 🚀

#### Clone GitHub Repository

Run in a terminal `git clone https://github.com/binarystarter/binarystarter-angular.git`. To specify another folder name, you can do a direct `git clone https://github.com/binarystarter/binarystarter-angular.git <project_name>`.

#### Prerequisites:

- [Install pnpm](https://pnpm.io/installation)
- [Install nx cli globally](https://nx.dev/getting-started/installation#installing-nx-globally)
- Install nodejs v20

#### Install modules

Run `pnpm install`.

#### Start the apps

- Angular `nx serve web`
- Server `nx serve express`

# Details

### 1. Angular

The angular app can be accessed using http://localhost:4200. All paths are considered server side rendered, except the child routes of `/c` `https://example.com/c/**` which are part of the client app. (e.g. `/c/dashboard`). Of course this can be adjusted per your needs.

The Angular client-side app can be accessed at `http://localhost:4200/c/*`

### 2. ExpressJS API Server

The express server is running by default on `localhost:8080`. This can be adjusted by updating the `.env` file

#### 2.1 Payload CMS

- 2.1.1 The payloadcms administration panel can be accessed at `http://localhost:8080/admin`

- 2.1.2 The payloadcms API can be accessed at `http://localhost:8080/api`

#### 2.2 Express Custom Routes API

ExpressJs endpoints can be accessed from `http://localhost:8080`

# More Information

## Authentication and Authorization

The authentication system is based on Passport Js.

You get the following pages in Angular, connected with the ExpressJs and Payload CMS.

## Angular SSR and Dashboard App

Angular comes with separated modules for the static pages and the single page application.

Separation of concerns is very important at this stage of development of the Angular Universal.

Static Pages are encapsuled in their modules and they don’t interact with browser APIs hungry components.

## DRY - Shared Types between the Backend and Frontend

The Backend TypeScript types should not be available on the Frontend.

What most developers do is create the same types on both frontend and backend APIs, which makes a bad precedence of duplicated code.

This problem is solved by using a mono repository.

Managed by nx.dev tools - now extending TypeScript types from the Backend or creating them from scratch can be done in a single shared library between your Angular app and ExpressJs Backend.

## ExpressJs Server integrated with Payload CMS

We get all the benefits of a monorepository.

ExpressJs is tightly integrated with PayloadCMS, but you can still add your own routes, outside of Payload.

We believe in TypeScript, hence everything is based on TypeScript.

# Connect with me

- [Twitter](https://twitter.com/florinmtsc)
- [Website](https://binarycentrum.com/)

# Resources

- [Intro to nx](https://nx.dev/getting-started/intro)
- [Install nx](https://nx.dev/getting-started/installation)
- [Why nx?](https://nx.dev/getting-started/why-nx)
- [nx: Run Tasks](https://nx.dev/core-features/run-tasks)
- [nx: Mental Model](https://nx.dev/concepts/mental-model)
- [pnpm commands](https://github.com/nvm-sh/nvm#usage)
