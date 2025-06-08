/* global grecaptcha */

import { useEffect, useRef } from "react";
import emailJS from "@emailjs/browser";
import Layout from "../components/Layout";
import PageWrapper from "../components/PageWrapper";

export default function Contact() {
    const formRef = useRef();
    const captchaRef = useRef();
    const widgetId = useRef(null);

    useEffect(() => {
        if (window.grecaptcha && captchaRef.current && widgetId.current === null) {
            widgetId.current = window.grecaptcha.render(captchaRef.current, {
                sitekey: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
            });
        }
    }, []);

    const sendMail = (e) => {
        e.preventDefault();

        // Utiliser l'ID du widget pour récupérer la réponse reCAPTCHA
        const recaptchaValue = window.grecaptcha.getResponse(widgetId.current);
        if (!recaptchaValue) {
            alert("Veuillez valider le reCAPTCHA.");
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
                (response) => {
                    console.log(response.text);
                    alert("Message envoyé");
                    formRef.current.reset();
                    // Reset du reCAPTCHA en ciblant le widget précis
                    window.grecaptcha.reset(widgetId.current);
                },
                (error) => {
                    console.log(error.text);
                    alert("Veuillez réessayer");
                }
            );
    };


    return (
        <>
            <Layout>
                <PageWrapper
                    className="bg-white rounded-2xl shadow-xl p-8 max-w-7xl w-full md:h-[559px] overflow-y-auto"
                >
                    <h2 className="text-3xl font-semibold mb-8 text-left">Me contacter</h2>

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

                    <form ref={formRef} onSubmit={sendMail} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block mb-2 font-medium">
                                Nom
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                placeholder="Votre nom"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block mb-2 font-medium">
                                Sujet
                            </label>
                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                required
                                placeholder="Sujet du message"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block mb-2 font-medium">
                                Adresse e-mail
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                placeholder="exemple@email.com"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block mb-2 font-medium">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                placeholder="Votre message..."
                                rows={5}
                                className="w-full p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                            ></textarea>
                        </div>

                        {/* reCAPTCHA rendu ici */}
                        <div ref={captchaRef} className="mb-6"></div>

                        <button
                            type="submit"
                            className="w-full bg-purple-500 text-white py-3 rounded-full font-semibold hover:bg-purple-600 focus:outline-none focus:ring-4 focus:ring-purple-300 transition"
                        >
                            Envoyer
                        </button>
                    </form>
                </PageWrapper>
            </Layout>
        </>
    );
}
