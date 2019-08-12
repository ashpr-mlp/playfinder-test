[![Netlify Status](https://api.netlify.com/api/v1/badges/2c41a360-552c-4f33-a5ea-59210aa825f9/deploy-status)](https://app.netlify.com/sites/eager-jackson-e7fc24/deploys)

# MyLocalPitchTest

This is my (Ash Prosser) submission to the PlayFinder test.

## What did I do?

I styled this like I would any enterprise scale application. A shared module for app-side content then the rest are feature driven.

Components are split up into dumb components and smart components (pages).

Components are tested.

Tested services where time allowed.

All observable driven.

Storybook stories (I was going to set up VRTs but no time)

Deployed site to Netlify.

## What didn't I do?

No state management. It would have added a lot of time and we would have had many missing features. Had to compromise here.

E2E tests. 

Page tests.

Not much UI fancy-ness.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
