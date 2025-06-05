import PageWrapper from "../components/PageWrapper";
import Layout from "../components/Layout";

export default function About() {
    return (
        <Layout>
            <PageWrapper
                className="bg-white rounded-2xl shadow-xl p-8 max-w-7xl w-full overflow-y-auto"
            >
                <h2 className="text-3xl font-semibold mb-6">À propos de moi</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                    Je m’appelle Victor Rosier, développeur web passionné par la création d’expériences numériques élégantes et accessibles.
                    Après une reconversion professionnelle réussie, j’ai obtenu un titre professionnel de développeur web et web mobile,
                    et je poursuis aujourd’hui activement ma recherche d’opportunités pour mettre en pratique mes compétences.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                    Mon stack favori comprend Symfony, JavaScript, HTML/CSS, mais aussi Java Spring Boot.
                    J’aime aussi créer des maquettes UI modernes avec Figma et transformer ces designs en applications fonctionnelles.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    En parallèle de la tech, je m’intéresse à l’aquariophilie, une passion qui me permet de me reconnecter avec la nature
                    et de développer ma patience et ma rigueur. C’est aussi un univers fascinant qui stimule ma curiosité au quotidien.
                </p>
            </PageWrapper>
        </Layout>
    );
}
