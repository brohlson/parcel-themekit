# Parcel Themekit Starter

![CircleCI](https://circleci.com/gh/brohlson/parcel-themekit/tree/master.svg?style=svg&circle-token=618ffce7f07a7fc7cd45b5bf4e55d4f14787a3b4)

This project is based on a great [Medium post from Dan Webb](https://medium.com/@danwebb/better-shopify-theme-development-with-parcel-js-704f17f367fc). I've grown pretty frustrated with trying to use both Slate V0 & Slate V1, both of which seem to have lost all ongoing development support at Shopify. Alas, the starter files you need to get a custom theme up and running are pretty slim.

Parcel bundler helps us to use some more modern development techniques & build for a wide variety of browsers using PostCSS & Babel. Some notable depedencies are `babel-polyfill` and `jquery` - as from what I understand, jQuery is required to interact with some of Shopify's client APIs.

## Setup

- Run `git clone https://github.com/brohlson/parcel-themekit.git MY_THEME_NAME`
- Run `sudo npm i -g parcel-bundler`
- Install the dependencies with command `yarn`
- Create a `config.yml` file at project root based on the example with your store credentials & connect to a theme. You can clone the starter Debut theme & then connect to the clone to make life easier.
- Run `yarn dev` command to watch for changes
- Build the production bundle files with `yarn build`.
- Finally, sync the built files to your store with `yarn deploy`.
- Simple `build` command is tested in this repo via Circle CI. Settings could be extended to test whatever you need.
