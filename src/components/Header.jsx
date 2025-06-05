import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
            <h1 className="text-xl font-bold">Victor Rosier</h1>
            <nav className="space-x-6 text-gray-700 font-medium">
                <Link to="/" className="hover:text-purple-600 transition font-semibold">Accueil</Link>
                <Link to="/projets" className="hover:text-purple-600 transition">Projets</Link>
                <Link to="/apropos" className="hover:text-purple-600 transition">À propos</Link>
                <Link to="/contact" className="hover:text-purple-600 transition">Contact</Link>
            </nav>
        </header>
    );
}
