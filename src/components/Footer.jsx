import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-gray-200 text-center text-sm text-gray-700 py-2 px-6 mt-auto">
            <p>© 2025 Victor Rosier – Tous droits réservés</p>
            <p className="mt-1">
                <Link
                    className="underline hover:text-purple-600 ml-1"
                    to="/mentions-legales">
                    Mentions légales
                </Link>
                {" | "}
                <Link
                    className="underline hover:text-purple-600"
                    to="/politique-confidentialite">
                    Politique de confidentialité
                </Link>
            </p>
        </footer>
    );
}
