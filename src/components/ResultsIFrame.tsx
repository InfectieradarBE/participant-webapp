import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const ResultsIFrame = (props: any) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (iframeRef.current) {
      // set a global variable to be available on early load stages
      (iframeRef.current.contentWindow as any)._parentLanguage = i18n.language;
      // post a message to the iframe whenever the language changes
      iframeRef.current.contentWindow?.postMessage("language_changed", "*");
    }
  }, [i18n, i18n.language]);

  return (
    <iframe
      style={{ width: "100%", height: "100%" }}
      ref={iframeRef}
      title="Results"
      src="assets/shiny-app/index.html"
    />
  );
};

export default ResultsIFrame;
