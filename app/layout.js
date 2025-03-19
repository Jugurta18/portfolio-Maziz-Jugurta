// app/layout.js
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import ReduxProvider from "../src/components/ReduxProvider";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";


export const metadata = {
  title: "Portfolio",
};


export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      
      <head />
      
      <body className="d-flex flex-column min-vh-100">
        <ReduxProvider>
          <Header />
          {/* Le contenu principal prend tout l'espace restant */}
          <main className="flex-grow-1">
            {children}
          </main>
          <Footer />
        </ReduxProvider>
        
      </body>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
    <link
   rel="stylesheet"
   href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap"
/>



    </html>
  );
}
