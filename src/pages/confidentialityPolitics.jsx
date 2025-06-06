import Layout from "../components/Layout";
import PageWrapper from "../components/PageWrapper";
import seoData from "../components/SEOdata";
import {useLocation} from "react-router-dom";

export default function ConfidentialityPolitics() {

    return (
        <>
            <Layout>
                <PageWrapper
                    className="bg-white rounded-2xl shadow-xl p-8 max-w-7xl w-full overflow-y-auto"
                >
                    <p>Les données personnelles collectées sur ce site sont utilisées uniquement
                        pour organiser au mieux la gestion de notre mariage.
                    </p>
                    <br/>

                    <p>Conformément au <strong>RGPD</strong>, vous disposez d’un droit d’accès,
                        de rectification et de suppression des données vous concernant. Pour exercer ce droit,
                        contactez-nous à <a className="text-blue-600 hover:text-purple-600" href="mailto:rosiervictor_dev@outlook.com">rosiervictor_dev@outlook.com</a>.
                    </p>
                    <br/>

                    <p>Le site utilise uniquement des cookies techniques nécessaires au fonctionnement (React.js).
                        <br/>
                        Aucun cookie publicitaire ou traceur tiers n’est utilisé, et aucune donnée n’est transmise à des
                        tiers.
                    </p>
                    <br/>

                    <p>Pour plus d’informations, consultez la CNIL :
                        <a className="text-blue-600 hover:text-purple-600" href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>
                    </p>

                    <p className="text-sm text-gray-500 mt-4">Dernière mise à jour : juin 2025</p>

                </PageWrapper>
            </Layout>
        </>
    );
}
