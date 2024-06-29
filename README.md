# Postié: Messenger App in TypeScript and Vite

[![Netlify Status](https://api.netlify.com/api/v1/badges/caa0fd93-89b7-45bd-9dd6-21e954bed05f/deploy-status)](https://app.netlify.com/sites/postie-messenger/deploys)

## Description

Welcome to the "Postié" project – a messenger created as part of the Yandex.Practicum course. This application allows
users to exchange messages in real-time, providing a convenient and intuitive interface for communication.

## Table of Contents

1. [Preview](#preview)
2. [Design](#design)
3. [Installation](#installation)
4. [Getting Started](#getting-started)
5. [Testing](#testing)
6. [Git Hooks](#git-hooks)
7. [Contact and Support](#contact-and-support)

## Preview

You can check the current deployed version here:

[https://postie.khizrim.ru](https://postie.khizrim.ru)

Or here:
[https://deploy-preview-4--postie-messenger.netlify.app](https://deploy-preview-4--postie-messenger.netlify.app)

It's deployed using [Netlify](https://www.netlify.com) from the [`deploy`](https://github.com/khizrim/postie/tree/deploy) branch.

## Design

Design is available in Figma [here](https://www.figma.com/file/zY19U0ZsjN22U7jp6JbLc0/Postie-%7C-Pages?type=design&t=YByCR6fDA28VvzmX-6).

What I used:
* [Gravity Icons](<https://www.figma.com/file/A90POkEH3t2HQPhBUWfYnf/Gravity-UI-Icons-(Community)?type=design&t=YByCR6fDA28VvzmX-6>)
* Easy illustration pack from [Ultima Free Illustrations Bundle](<https://www.figma.com/file/BCikNseyJW0b8XGgbI5YDE/Ultima-Free-Illustrations-Bundle-(Community)?type=design&t=YByCR6fDA28VvzmX-6>)

## Installation

1. Clone this repository or download the source code.

2. Move to the project folder and install dependencies using npm by running the following command:
   ```bash
   npm ci
   ```

## Getting Started

1. After completing the installation, run the following command in the project directory to start the application in dev mode:
   ```bash
   npm run dev
   ```
2. Open your browser and navigate to http://localhost:3000.
3. Sign in or create a new account to start using Postié.
4. Explore the intuitive interface to send and receive messages in real-time.

## Testing

Unit tests have been implemented using Mocha and Chai for various helper functions and components.

Added tests for Block, HTTP-Transport, and Router functionalities.

To run tests:

   ```bash
   npm run test
   ```

## Git Hooks

* Integrated Husky for Git hooks to ensure code quality checks before commits.
* A pre-commit script runs 'npm check' to enforce checks before allowing commits.

## Contact and Support

For further information, please contact me at [khizrim@khizrim.ru](mailto:khizrim@khizrim.ru). I appreciate your feedback and am here to help with any questions you may have.
