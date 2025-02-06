# React Router v6 useParams Bug

This repository demonstrates a common error encountered when using the `useParams` hook in React Router v6.  The issue arises when attempting to access route parameters from a component that is not a direct child of a route element defined within the `Routes` component. This leads to the `params` object being empty or containing outdated values.

The `IncorrectParamUse.js` file showcases the incorrect implementation that leads to the bug.  `CorrectParamUse.js` demonstrates the corrected approach.  The key is to ensure `useParams` is used only within components that are direct children of the relevant route element within `Routes`.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to launch the application.
4. Observe the behavior of `IncorrectParamUse.js` and `CorrectParamUse.js` to see the difference.

## Solution

To avoid this bug, refactor your components so that `useParams` is used directly within components rendered by route elements.
