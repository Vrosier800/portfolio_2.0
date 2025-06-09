/* global grecaptcha */

import { useEffect, useRef, useState } from "react";
import emailJS from "@emailjs/browser";
import Layout from "../components/Layout";
import PageWrapper from "../components/PageWrapper";

export default function Contact() {
    const formRef = useRef();
    const captchaRef = useRef();
    const widgetId = useRef(null);

    const [formData, setFormData] = useState({ name: "", subject: "", email: "", message: "" });
    const [errors, setErrors] = useState({});
    const [successMsg, setSuccessMsg] = useState("");
    const [isSending, setIsSending] = useState(false);

    useEffect(() => {
        if (window.grecaptcha && captchaRef.current && widgetId.current === null) {
            widgetId.current = window.grecaptcha.render(captchaRef.current, {
                sitekey: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
            });
        }
    }, []);

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Le nom est requis.";
        if (!formData.subject.trim()) newErrors.subject = "Le sujet est requis.";
        if (!formData.email.includes("@")) newErrors.email = "Email invalide.";
        if (!formData.message.trim()) newErrors.message = "Le message est requis.";
        return newErrors;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendMail = (e) => {
        e.preventDefault();
        setSuccessMsg("");
        setErrors({});
        setIsSending(true);

        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            setIsSending(false);
            return;
        }

        const recaptchaValue = window.grecaptcha.getResponse(widgetId.current);
        if (!recaptchaValue) {
            setErrors({ global: "Veuillez valider le reCAPTCHA." });
            setIsSending(false);
            return;
        }

        emailJS
            .sendForm(
                "service_imkqftf",
                "template_6e2dn3g",
                formRef.current,
                import.meta.env.VITE_MAILJS_KEY
            )
            .then(
                () => {
                    setSuccessMsg("Message envoyé avec succès !");
                    setFormData({ name: "", subject: "", email: "", message: "" });
                    formRef.current.reset();
                    window.grecaptcha.reset(widgetId.current);
                    setIsSending(false);
                },
                () => {
                    setErrors({ global: "Erreur lors de l’envoi. Veuillez réessayer." });
                    setIsSending(false);
                }
            );
    };

    return (
        <Layout>
            <PageWrapper className="bg-white rounded-2xl shadow-xl p-8 max-w-7xl w-full md:h-[553px] overflow-y-auto">
                <h2 className="text-3xl font-semibold mb-8 text-left">Me contacter</h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">Vous souhaitez échanger au sujet de votre projet ?
                    Je suis joignable via mes réseaux sociaux ou directement à travers ce formulaire de contact.</p>
                <section className="mb-6">
                    <ul className="flex flex-col sm:flex-row sm:gap-20 gap-5">
                        <li>
                            <a
                                href="https://www.github.com/vrosier800"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-purple-700 hover:text-purple-900 transition"
                            >
                                <img
                                    src="/public/github.png"
                                    alt="GitHub"
                                    className="w-6 h-6"
                                />
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/vrosier800/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-purple-700 hover:text-purple-900 transition"
                            >
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                                    alt="Instagram"
                                    className="w-6 h-6 rounded"
                                />
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/victor-rosier-2143b5140/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-purple-700 hover:text-purple-900 transition"
                            >
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg"
                                    alt="LinkedIn"
                                    className="w-6 h-6"
                                />
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </section>

                <section className="mb-6">
                    <ul className="flex flex-col sm:flex-row sm:gap-20 gap-5">
                    </ul>
                </section>

                <form ref={formRef} onSubmit={sendMail} className="space-y-6 relative">
                    {errors.global && <p className="text-red-600">{errors.global}</p>}

                    <div>
                        <label htmlFor="name" className="block mb-2 font-medium">Nom</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
                    </div>

                    <div>
                        <label htmlFor="subject" className="block mb-2 font-medium">Sujet</label>
                        <input
                            id="subject"
                            name="subject"
                            type="text"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        {errors.subject && <p className="text-red-600 text-sm">{errors.subject}</p>}
                    </div>

                    <div>
                        <label htmlFor="email" className="block mb-2 font-medium">Adresse e-mail</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
                    </div>

                    <div>
                        <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
                    </div>

                    <div ref={captchaRef} className="mb-6"></div>

                    {successMsg && <p className="text-green-600">{successMsg}</p>}
                    <button
                        type="submit"
                        disabled={isSending}
                        className="w-full bg-purple-500 text-white py-3 rounded-full font-semibold hover:bg-purple-600 focus:outline-none focus:ring-4 focus:ring-purple-300 transition relative"
                    >
                        {isSending ? (
                            <span className="flex items-center justify-center gap-2">
                                <span className="spinner"></span> Envoi en cours...
                            </span>
                        ) : (
                            "Envoyer"
                        )}
                    </button>
                </form>

                <style>{`
                    .spinner {
                        width: 16px;
                        height: 16px;
                        border: 2px solid transparent;
                        border-top: 2px solid white;
                        border-radius: 50%;
                        animation: spin 0.8s linear infinite;
                    }
                    @keyframes spin {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                    }
                `}</style>
            </PageWrapper>
        </Layout>
    );
}