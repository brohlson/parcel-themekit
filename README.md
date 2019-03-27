# Parcel Themekit Starter

This project is based on a great [Medium post from Dan Webb](https://medium.com/@danwebb/better-shopify-theme-development-with-parcel-js-704f17f367fc). I've grown pretty frustrated with trying to use both Slate V0 & Slate V1, both of which seem to have lost all ongoing development support at Shopify. Alas, the starter files you need to get a custom theme up and running are pretty slim.

Parcel bundler helps us to use some more modern development techniques & build for a wide variety of browsers using PostCSS & Babel. Some notable depedencies are `babel-polyfill` and `jquery` - as from what I understand, jQuery is required to interact with some of Shopify's client APIs.

## Setup

- Run `git clone https://github.com/brohlson/parcel-themekit.git MY_THEME_NAME`
- Run `sudo npm i -g parcel-bundler`
- Install the dependencies with either NPM or Yarn at project root `npm i || yarn`
- Create a `config.yml` file based on the example with your store credentials & connect to a theme. You can clone the starter theme & then connect to the clone to make life easier.
- Run the `dev` command to watch for changes
- Build the production bundle files with the `build` command.
- Finally, sync the built files to your store with the `deploy` command.
