import Layout from "../components/Layout";
import PageWrapper from "../components/PageWrapper";

export default function LegalNotices() {

    return (
        <>
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
                        Nom : Vercel Inc.
                        <br/>
                        Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
                        <br/>
                        Site web : https://vercel.com

                    </p>

                    <br/>

                    <hr/>

                    <p>Le contenu de ce site est protégé par le droit d’auteur. Toute reproduction est interdite sans
                        autorisation.</p>

                </PageWrapper>
            </Layout>
        </>
    );
}
