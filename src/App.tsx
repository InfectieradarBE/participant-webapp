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

import * as appConfig from "./configs/appConfig.json";
import * as footerConfig from "./configs/footer.json";
import * as headerConfig from "./configs/header.json";
import * as navbarConfig from "./configs/navbar.json";
import * as pagesConfig from "./configs/pages.json";

const App: React.FC = () => {

  const { i18n } = useTranslation();

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
        footerConfig={footerConfig as FooterConfig}
      />
    </React.Fragment>
  );
};

export default App;
