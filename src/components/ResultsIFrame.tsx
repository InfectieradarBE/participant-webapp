import { useTranslation } from "react-i18next";
import IframeResizer  from "@iframe-resizer/react";

const ResultsIFrame = (props: any) => {
    const { i18n } = useTranslation();

    const baseUrl = "https://dashboard.infectieradar.be"
    const iframeURL = `${baseUrl}/${i18n.language}?embed=true`

    return (
        <IframeResizer
            id="iframe-target"
            license="GPLv3" // GPLv3 License since this project is open-source
            src={iframeURL}
            style={{ width: '100%',  height: '100vh' }}
        />
    );
};

export default ResultsIFrame;