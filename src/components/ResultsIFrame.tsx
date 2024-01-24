import { useTranslation } from "react-i18next";

const ResultsIFrame = (props: any) => {
    const { i18n } = useTranslation();

    const baseUrl = "http://127.0.0.1:5432/"
    const iframeURL = `${baseUrl}?lang=${i18n.language}`

    return (
        <iframe
            style={{ width: "100%", height: "1800px" }}
            title="Results IFrame"
            src={iframeURL}
        />
    );
};

export default ResultsIFrame;