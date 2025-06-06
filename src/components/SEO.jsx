import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import seoData from "./SEOdata";
import {useEffect} from "react";

export default function SEO() {
    const location = useLocation();

    let pageKey = "home";
    switch (location.pathname) {
        case "/apropos":
            pageKey = "about";
            break;
        case "/projets":
            pageKey = "projets";
            break;
        case "/contact":
            pageKey = "contact";
            break;
        case "/politique-confidentialite":
            pageKey = "confidentialityPolitics";
            break;
        case "/mentions-legales":
            pageKey = "legalNotices";
            break;
        default:
            pageKey = "home";
    }

    const { title } = seoData[pageKey];

    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <Helmet>
            <title>{title}</title>
        </Helmet>
    );
}
