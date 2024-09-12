import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store, initI18n } from '@influenzanet/case-web-app-core';

import { LoadingPlaceholder } from '@influenzanet/case-web-ui';

import './index.scss';

import '@fontsource/open-sans';
// import "@fontsource/open-sans/300.css"; // for light font
import '@fontsource/open-sans/400-italic.css';
import '@fontsource/open-sans/700.css';
import {
  faHome,
  faSignOutAlt,
  faCog,
  faArrowRight,
  faArrowLeft,
  faBars,
  faPen,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { library, dom } from '@fortawesome/fontawesome-svg-core';

import 'bootstrap/dist/js/bootstrap.bundle';

import App from './App';

const localeURL = process.env.REACT_APP_CONTENT_URL + '/locales';
const defaultLanguage = process.env.REACT_APP_DEFAULT_LANGUAGE ?? 'en';
const fallbackLanguage = process.env.REACT_APP_FALLBACK_LANGUAGE ?? 'en';

initI18n(defaultLanguage, fallbackLanguage, localeURL);

library.add(faHome, faSignOutAlt, faCog, faArrowRight, faArrowLeft, faBars, faPen, faTrash, faTwitter, faFacebook);
dom.watch();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<LoadingPlaceholder color="secondary" minHeight="100vh" />}>
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
