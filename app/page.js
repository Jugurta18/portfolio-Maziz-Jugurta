"use client";
import Image from "next/image";
import Link from "next/link";
import ProtectedRoute from "../src/components/ProtectedRoute";

export default function Home() {
  return (
    <ProtectedRoute>
      <div
        className="container-fluid p-0 min-vh-100 position-relative"
        style={{
          fontFamily: "'Poppins', sans-serif",
          background: 'url("/images/photobackground.jpg") no-repeat center center/cover',
        }}
      >
        {/* Effet semi-transparent */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ background: "rgba(0, 0, 0, 0.5)" }}
        ></div>

        {/* Contenu principal */}
        <div className="position-relative" style={{ zIndex: 2 }}>
          {/* Hero Section */}
          <section className="container py-5">
            <div className="row align-items-center">
              {/* Colonne image */}
              <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0">
                <Image
                  src="/images/maziz.jpg"
                  alt="Photo de profil de Maziz Jugurta"
                  width={400}
                  height={400}
                  className="rounded shadow-lg animate__animated animate__fadeInLeft"
                  priority
                />
              </div>
              {/* Colonne texte */}
              <div className="col-12 col-lg-6 text-center text-lg-start">
                <h1
                  className="fw-bold text-white animate__animated animate__fadeInDown"
                  style={{ fontSize: "2rem", lineHeight: "1.2" }}
                >
                  Maziz Jugurta, 31 ans originaire d'Algérie, titulaire d'un Master en Communication & Relations Publiques<br />
                  & Futur diplômé en Programmation Informatique au Collège La Cité Ottawa.
                </h1>
                <p
                  className="lead text-white my-4 animate__animated animate__fadeInDown animate__delay-1s"
                  style={{ fontSize: "1.125rem" }}
                >
                  Passionné par l'informatique et le développement web, je conçois des solutions innovantes alliant technologie et stratégie. Mon parcours diversifié m'a permis de développer une approche créative et efficace.
                </p>
                <div className="d-flex gap-3 justify-content-center justify-content-lg-start animate__animated animate__fadeInUp animate__delay-2s">
                  <Link
                    href="/resume"
                    className="btn btn-dark btn-lg px-4"
                    style={{ background: "linear-gradient(45deg, #000, #444)" }}
                  >
                    Resume
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION INSPIRÉE - 3 colonnes */}
          <section className="container my-5">
            <div className="row text-center">
              {/* 1ère colonne : Communication efficace */}
              <div className="col-12 col-md-4 mb-4 animate__animated animate__fadeInUp">
                <i className="bi bi-chat-dots text-primary" style={{ fontSize: "2.5rem" }}></i>
                <h4 className="fw-bold text-white mt-2">Communication efficace</h4>
                <p className="text-gray-300">
                  Organisé et ponctuel, je privilégie une communication claire et fluide pour assurer le bon déroulement de chaque projet.
                </p>
              </div>
              {/* 2e colonne : Contact */}
              <div className="col-12 col-md-4 mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                <i className="bi bi-person-lines-fill text-primary" style={{ fontSize: "2.5rem" }}></i>
                <h4 className="fw-bold text-white mt-2">Contact</h4>
                <p className="text-gray-300">
                  Vous pouvez me joindre directement par téléphone ou par email pour toute demande d'information.
                </p>
              </div>
              {/* 3e colonne : Expertise technique */}
              <div className="col-12 col-md-4 mb-4 animate__animated animate__fadeInUp animate__delay-2s">
                <i className="bi bi-cpu text-primary" style={{ fontSize: "2.5rem" }}></i>
                <h4 className="fw-bold text-white mt-2">Expertise technique</h4>
                <p className="text-gray-300">
                  Alliant compétences en développement web, design graphique et montage vidéo, j'offre des solutions digitales innovantes et complètes.
                </p>
              </div>
            </div>
          </section>

          {/* Section de contact avec icônes */}
          <section className="container my-5">
            <div className="space-y-4 text-center animate__animated animate__fadeInUp animate__delay-3s">
              <div className="flex items-center justify-center gap-3">
                <i className="bi bi-telephone text-primary" style={{ fontSize: "2rem" }}></i>
                <span className="text-white text-lg">514-451-0952</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <i className="bi bi-envelope text-primary" style={{ fontSize: "2rem" }}></i>
                <span className="text-white text-lg">
                  <a href="mailto:jugurtamaziz1994@gmail.com" className="hover:underline">
                    jugurtamaziz1994@gmail.com
                  </a>
                </span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <i className="bi bi-geo-alt text-primary" style={{ fontSize: "2rem" }}></i>
                <span className="text-white text-lg">334 Stone Quarry Private, Ottawa, ON K1K 3Y2</span>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-3">
            <div className="container text-center">
              <p className="text-white">
                &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </div>
      <style jsx>{`
        /* Utilisation d'animate.css pour les animations */
        @import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
      `}</style>
    </ProtectedRoute>
  );
}
