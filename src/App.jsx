import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/home";
import Projets from "./pages/projets";
import About from "./pages/about";
import Contact from "./pages/contact";
import ConfidentialityPolitics from "./pages/confidentialityPolitics";
import LegalNotices from "./pages/legalNotices";
import SEO from "./components/SEO"; // 👈 Import ici

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <>
            <SEO />
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/projets" element={<Projets />} />
                    <Route path="/apropos" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/politique-confidentialite" element={<ConfidentialityPolitics />} />
                    <Route path="/mentions-legales" element={<LegalNotices />} />
                </Routes>
            </AnimatePresence>
        </>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <AnimatedRoutes />
        </BrowserRouter>
    );
}
