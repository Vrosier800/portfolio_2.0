import { motion } from "framer-motion";
import Layout from "../components/Layout";
import PageWrapper from "../components/PageWrapper";
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <Layout>
            <PageWrapper
                className="bg-white rounded-2xl shadow-xl p-10 max-w-md w-full text-center"
            >
                <div className="mb-8">
                    <img
                        src="/src/assets/photoPortfolioMaquette.png"
                        alt="Victor Rosier en train de coder"
                        className="rounded-full w-40 h-40 object-cover mx-auto shadow-lg"
                    />
                </div>
                <h2 className="text-3xl font-semibold mb-4">Victor Rosier</h2>
                <p className="text-gray-700 mb-8">
                    Développeur web passionné, prêt à mener à bien tous vos projets.
                </p>
                <Link to="/projets"
                      className="bg-purple-500 text-white py-3 px-8 rounded-full hover:bg-purple-600 transition font-semibold shadow-md"
                >
                        Voir mes Projets
                </Link>
        </PageWrapper>
</Layout>
)
    ;
}
