# Svelte Lorca Template

A starter project for building modern cross-platform desktop apps in Go, HTML, and Svelte.

This project is a fork of [lorca-ts-react-starter](https://github.com/erkkah/lorca-ts-react-starter). Thank You to Erik Agsjö

## Getting started

Either just clone this repo and start coding, or repeat the simple steps taken to create it yourself to get that warm fuzzy feeling of having done it all "by hand".

### Prerequisites

Since this project builds on [Lorca][2], you need Chrome installed to develop and run your app. You also need recent enough versions of Go (1.16), Node.js and npm installed.

### Cloning

1. Clone this repo: `git clone https://github.com/bmw2621/svelte-lorca-template.git <NEWPROJECTNAME>`
1. Go to the newly created directory: `cd <NEWPROJECTNAME>`
1. Install dependencies: `yarn`
1. Launch the app in development mode: `yarn start`
1. Read the code and start building your app!

## Available Scripts

In the project directory, you can run:

### `yarn start`

Builds the Svelte application and serves it. The "backend" Go part will launch Chrome to display the HTML content. _This is not in watch mode, for watch mode run `yarn dev`_

### `yarn dev`

Starts the Svelte application in development mode (hot reload watching for file changes). The "backend" Go part will launch Chrome to display the HTML content.

### `yarn build`

Builds the app for production, creating a single executable will all assets bundled. It correctly bundles Svelte in production mode and optimizes the build for the best performance.

### `yarn test`

Runs go test and jest. Go test will fail without the `assets.go` file that is run during code generation, so `go generate` runs first. Frontend and backend tests can be run individually with `yarn svelte:test` or yarn `go:test` respectively.

### `node ./scripts/setupTypeScript.js`

Uses the Svelte Template provided script to add typescript to the frontend project
