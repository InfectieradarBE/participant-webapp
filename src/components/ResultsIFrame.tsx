import { useTranslation } from "react-i18next";
import IframeResizer  from "@iframe-resizer/react";

const ResultsIFrame = (props: any) => {
    const { i18n } = useTranslation();

    const baseUrl = "http://dashboard.infectieradar.be/"
    const iframeURL = `${baseUrl}?lang=${i18n.language}`

    return (
        //<iframe
        //    style={{ width: "100%", height: "1800px" }}
        //    title="Results IFrame"
        //    src={iframeURL}
        ///>
        <IframeResizer
            id="iframe-target"
            license="GPLv3" // development only, license key required for production
            src={iframeURL}
            style={{ width: '100%',  height: '100vh' }}
        />
    );
};

export default ResultsIFrame;