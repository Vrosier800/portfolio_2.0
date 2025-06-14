import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Projets from "./pages/Projets";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ConfidentialityPolitics from "./pages/ConfidentialityPolitics";
import LegalNotices from "./pages/LegalNotices";
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
