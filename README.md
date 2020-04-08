# Angular Guestbook

It's a Guestbook like I wrote in the late 1998's, but not in Perl/CGI but in Angular.

It also includes a guestbook API written in node express.

## Install

This project uses lerna to manage frontend and backend in a single monorepo.

```
npm i
npm run bootstrap
```

## Starting

You can either run the backend and frontend separately via `npm run frontend` and `npm run backend` or just `npm start`.

## Server

The server is a one-file `server.js`, exposing a single `/api/guestbook/` route. GET for getting requests, POST for posting a new comment.

## Frontend

The frontend is an Angular 9 app, created via the Angular CLI.
