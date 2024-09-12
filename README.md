# participant-web-app

A web-interface for the Influenzanet platform.

## Web UI configuration

Start by creating a fork of this repo in your local organisation or create a local copy of this repository.

The `example-public-folder` folder contains a working example of a possible web application structure. Create a copy of this folder named `public` and replace the contents there to suit your needs.

1. Update the `public/assets/locales` to add folders for each supported language.
2. Configure the keys, json and markdown contents within the `locales` folders.
3. Upload additional images needed into the `public/assets/images` folder.
4. Configure page layouts, headers, and footers by configuring the json files present in `public/assets/configs`.

4.1. **appConfig.json**: Set the language codes for the supported languages here. Also configure the avatars available for user profiles here.

4.2. **header.json**: Set the logo image and styles used in the header here.

4.3. **navbar.json**: Set the items and the URL's they map on the navigation bar. This also includes the items that show up under the user dropdown on the right corner of the navbar.

4.4. **footer.json**: Configure the columns and links in the footer section.

4.5. **pages.json**: Contains an array of the different pages of the webapp. Here you can map a url to a page, and set the layout, contents, elements and styles for each page item. Note: `pageKey` is used to map to a file in the `locales` folder containing the localized labels for the elements of the page. `itemkey` defines the key to be looked for in the file identified by `pageKey`.


### Results Page

The result's page is a container to display different subpages. The list of subpages needs to be defined through the file `content/<language>/results.json` for each translation.

Example content for the `results.json` file:

``` json
{
  "defaultRoute": "week43",
  "pages": [
    {
      "linkName": "Results for Week 43",
      "route": "week43",
      "markdown": "content/en/results/week43.md"
    },
    {
      "linkName": "Results for Week 42",
      "route": "week42",
      "markdown": "content/en/results/week42.md"
    }
  ]
}
```

`defaultRoute` controls which subpage will be displayed by default (typically when the results page is opened). Route name will be appended at the end of the url for the results page container, so there is no need to write the full url here.

`pages` is the list of available sub-pages. To add a new page, three an object with three attributes needs to be added to the list:

- `linkName`: text that will be displayed in the link (navigation right bottom) - ideally a short human readable text / title of the page.
- `route`: selector that will be used in the url to navigate to the page.
- `markdown`: path where the markdown definition for the page can be found.

## Production Environment Setup

1. Copy `env-sample.config` to `.env-local`
2. Configure the fields present in the file `.env-local`:

    ```
    REACT_APP_DEFAULT_INSTANCE=<instance-name>
    REACT_APP_API_BASE_URL=/api
    REACT_APP_DEFAULT_LANGUAGE=en
    REACT_APP_FALLBACK_LANGUAGE=en
    REACT_APP_CONTENT_URL="/assets"
    REACT_APP_USE_RECAPTCHA=true
    REACT_APP_RECAPTCHA_SITEKEY=<reCaptcha_public_key>
    REACT_APP_TITLE=<app-title>
    REACT_APP_DESCRIPTION=<app-description>
    REACT_APP_CSP_DEFAULT_SRC="'self'"
    REACT_APP_CSP_BASE_URI="'self'"
    REACT_APP_CSP_FRAME_ANCESTORS="'none'"
    REACT_APP_CSP_MEDIA_SRC="'self'"
    REACT_APP_CSP_IMG_SRC="'self'"
    REACT_APP_CSP_STYLE_SRC="'self' https://www.gstatic.com/recaptcha/ https://www.google.com/recaptcha/ "
    REACT_APP_CSP_SCRIPT_SRC="'self' https://www.gstatic.com/recaptcha/ https://www.google.com/recaptcha/"
    REACT_APP_CSP_FRAME_SRC="https://www.google.com/recaptcha/ https://recaptcha.google.com/recaptcha"
    REACT_APP_CSP_CHILD_SRC="https://www.google.com/"
    REACT_APP_CSP_CONNECT_URLS="'self'' https://www.google.com/recaptcha/ https://www.google.com/ http://www.w3.org/2000/svg"
    ```

    - Make sure to update the fields `REACT_APP_RECAPTCHA_SITEKEY` and `REACT_APP_DEFAULT_INSTANCE` to suit your needs.

    - Replace the `REACT_APP_CSP_CONNECT_URLS` with all the urls which must be allowed in CSP connect-src, including the api endpoint uri if they are served from a different domain.

    - Add the option 'unsafe-eval' in `REACT_APP_CSP_SCRIPT_SRC` if you need Vega plot rendering.

    - System falls back to 'en' if `REACT_APP_DEFAULT_LANGUAGE` and `REACT_APP_FALLBACK_LANGUAGE` are not set.
    
## Development Environment Setup

1. Create `.env.development.local` and override the contents of `.env.local` as needed
2. Install dependencies by running ```yarn install```
3. Run the web ui by entering ```yarn start```
4. Test the application locally

## Deploy the application

1. Create the following github secrets:

- DOCKER_ORGANIZATION
- DOCKER_REPO_NAME
- DOCKER_USER
- DOCKER_PASSWORD

2. Run the github action defined in `.github/workflows/docker-image.yml` to build and deploy docker images.

## Appendix - Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### configure proxy for api calls

In order to be able to call api endpoints when testing the web app locally, you need to proxy the requests directed to the `/api` endpoint accordingly to the platform setup you are targeting. 

In case you have all the services running locally, you can use the configuration present in `setupProxy-local.js` and copy it to a file named `setupProxy.js`

In case you want to run the web app locally but target a platform hosted somewhere else (for example, a Kubernetes cluster in the cloud) you can use the configuration present in `setupProxy-remote.js` and copy it to a file named `setupProxy.js`.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
