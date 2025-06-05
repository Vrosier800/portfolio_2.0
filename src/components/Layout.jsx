import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col overflow-x-hidden">
            <Header />
            <main className="flex-grow px-6 py-12 flex justify-center items-center">
                {children}
            </main>
            <Footer />
        </div>
    );
}

