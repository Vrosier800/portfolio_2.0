import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import PageWrapper from "../components/PageWrapper";

export default function Projets() {
    return (
        <Layout className="bg-gray-100 min-h-screen flex flex-col">
                <PageWrapper
                    className="bg-white rounded-2xl shadow-xl p-8 max-w-7xl w-full md:h-[559px] overflow-y-auto"
                >
                    <h2 className="text-3xl font-semibold mb-4 text-left">Projet Mariage Symfony</h2>
                    <p className="text-gray-600 mb-8 text-left max-w-4xl">
                        Application web développée en Symfony pour la gestion d’un mariage.
                        Permet la gestion des invités, un formulaire RSVP, des préférences alimentaires,
                        la gestion des images avec des photographies des invités et bien plus encore.
                    </p>

                    <div className="flex flex-col md:flex-row md:justify-center gap-6 mb-8">
                        <img
                            src="/src/assets/img-mariage.png"
                            alt="Victor Rosier en train de coder"
                            className="w-full md:w-[400px] h-64 md:h-80 object-cover rounded-lg shadow-md"
                            loading="lazy"
                        />
                        <img
                            src="/src/assets/img-mariage2.png"
                            alt="Victor Rosier en train de coder"
                            className="w-full md:w-[400px] h-64 md:h-80 object-cover rounded-lg shadow-md"
                            loading="lazy"
                        />
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        {["Symfony", "MySQL", "Admin Dashboard", "Gestion des images", "Déploiement en ligne", "Suivi du SEO"].map((tech) => (
                            <span
                                key={tech}
                                className="bg-gray-200 text-gray-700 py-2 px-5 rounded-full text-sm font-semibold hover:bg-purple-100 hover:text-purple-600 transition cursor-default"
                            >
                {tech}
              </span>
                        ))}
                    </div>

                    <p className="text-gray-600 mb-6 max-w-4xl text-left">
                        Ce projet a été réalisé en autonomie afin de servir à mon propre mariage.
                        Il permet de partager les informations de mon mariage avec les invités.
                    </p>

                    <div className="text-center">
                        <a
                            href="https://github.com/Vrosier800/Mariage-Symfony-Public"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-purple-500 text-white py-3 px-8 rounded-full font-semibold hover:bg-purple-600 transition"
                        >
                            Voir le code
                        </a>
                    </div>
                </PageWrapper>
        </Layout>
    );
}
