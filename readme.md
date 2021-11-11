# Ordersystem - Sofware Life Cycle Management

## Setup

In root folder.

- `cp .env.example .env`
  Change example varible values to the correct ones.

- `npm install`

## run project locally

mac/linux

- `npm run develop` with mock db
- `npm run production` with production db

windows

- `npm run win-dev` with mock db
- `npm run win-prod` with production db

Visit application locally at http://localhost:3000

## Deployment

The app deploys automatically to _Heroku_ when pushed to the `main-mongoDB` branch.

Visit application at https://ordersystem-swlcm.herokuapp.com/
