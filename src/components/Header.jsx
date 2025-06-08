import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icônes Lucide (ou tu peux utiliser Heroicons)

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md py-4 px-6 md:px-8">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold">Victor Rosier</h1>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
                    <Link to="/" className="hover:text-purple-600 transition font-semibold">Accueil</Link>
                    <Link to="/projets" className="hover:text-purple-600 transition">Projets</Link>
                    <Link to="/apropos" className="hover:text-purple-600 transition">À propos</Link>
                    <Link to="/contact" className="hover:text-purple-600 transition">Contact</Link>
                </nav>

                {/* Mobile menu toggle */}
                <button
                    className="md:hidden text-purple-700"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menu"
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {menuOpen && (
                <nav className="md:hidden mt-4 space-y-4 text-gray-700 font-medium">
                    <Link to="/" onClick={() => setMenuOpen(false)} className="block hover:text-purple-600">Accueil</Link>
                    <Link to="/projets" onClick={() => setMenuOpen(false)} className="block hover:text-purple-600">Projets</Link>
                    <Link to="/apropos" onClick={() => setMenuOpen(false)} className="block hover:text-purple-600">À propos</Link>
                    <Link to="/contact" onClick={() => setMenuOpen(false)} className="block hover:text-purple-600">Contact</Link>
                </nav>
            )}
        </header>
    );
}
