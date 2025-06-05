import { motion } from "framer-motion";
import Layout from "../components/Layout";
import PageWrapper from "../components/PageWrapper";

export default function LegalNotices() {
    return (
        <Layout>
            <PageWrapper
                className="bg-white rounded-2xl shadow-xl p-8 max-w-7xl w-full overflow-y-auto"
            >
                <p>
                    <strong className="bold">Éditeur du site :</strong>
                    <br/>
                    Nom : ROSIER Victor
                    <br/>
                    Adresse : 59 rue Le Notre 80000 AMIENS
                    <br/>
                    Téléphone : 06.85.16.51.55
                    <br/>
                    Email : vrosier800@gmail.com
                </p>
                <br/>
                <p>
                    <strong className="bold">Directeur de la publication :</strong>
                    <br/>
                    Victor Rosier
                </p>
                <br/>
                <p>
                    <strong className="bold">Hébergeur :</strong>
                    <br/>
                    Nom : Hetzner Online GmbH
                    <br/>
                    Adresse : Industriestraße 25, 91710 Gunzenhausen, Allemagne
                    <br/>
                    Téléphone : +49 9831 505-0
                </p>

                <br/>

                <hr/>

                <p>Le contenu de ce site est protégé par le droit d’auteur. Toute reproduction est interdite sans
                    autorisation.</p>

            </PageWrapper>
        </Layout>
    );
}
