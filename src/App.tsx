import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  AppCore,
  AppConfig,
  FooterConfig,
  HeaderConfig,
  NavbarConfig,
  PagesConfig
} from '@influenzanet/case-web-app-core';

import { fr, de, nl } from 'date-fns/locale';

import * as appConfig from "./configs/appConfig.json";
import * as footerConfig from "./configs/footer.json";
import * as headerConfig from "./configs/header.json";
import * as navbarConfig from "./configs/navbar.json";
import * as pagesConfig from "./configs/pages.json";

import ResultsIFrame from "./components/ResultsIFrame";

const extensions = [{name: "results-iframe", component: ResultsIFrame}];

const App: React.FC = () => {

  const { i18n } = useTranslation();

  const dateLocales = [
    { code: 'fr-be', locale: fr, format: 'dd/MM/yyyy' },
    { code: 'de-be', locale: de, format: 'dd/MM/yyyy' },
    { code: 'nl-be', locale: nl, format: 'dd/MM/yyyy' },
  ];

  useEffect(() => {
    if (!i18n.language) {
      i18n.changeLanguage(`${process.env.REACT_APP_DEFAULT_LANGUAGE}`);
    }
  }, [i18n, i18n.language]);

  let appConfig_: AppConfig = { ...appConfig };
  if (process.env.REACT_APP_DEFAULT_INSTANCE) {
    appConfig_.instanceId = process.env.REACT_APP_DEFAULT_INSTANCE;
  }

  return (
    <React.Fragment>
      <AppCore
        appConfig={appConfig as AppConfig}
        headerConfig={headerConfig as HeaderConfig}
        navbarConfig={navbarConfig as NavbarConfig}
        pagesConfig={pagesConfig as PagesConfig}
        extensions={extensions}
        footerConfig={footerConfig as FooterConfig}
        dateLocales={dateLocales}
      />
    </React.Fragment>
  );
};

export default App;
