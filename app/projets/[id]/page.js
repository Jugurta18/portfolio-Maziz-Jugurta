"use client";
import Image from "next/image";
import ProtectedRoute from "../../../src/components/ProtectedRoute";
import { useParams } from "next/navigation";

export default function ProjectDetails() {
  const { id } = useParams();

  // Deux projets : 1 Le Palais du Burger, 2 pour AcademiaHub
  const projects = {
    "1": {
      title: "Le Palais du Burger",
      description: `Ce projet est la vitrine en ligne du restaurant "Le Palais du Burger",
      situé au cœur d'Ottawa, Ontario. Il offre une expérience immersive grâce à
      une interface conviviale, reflétant l'atmosphère chaleureuse et décontractée de l'établissement.`,
      features: [
        "Page d'accueil (présentation du restaurant)",
        "Qui sommes-nous ?",
        "Menu (Burger Classique / Spécialité) avec JavaScript",
        "Contact (Formulaire validé en JavaScript)",
        "Inscription (Formulaire validé en JavaScript)",
        "Page Jeux (quizz JavaScript)",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript"],
      images: [
        "/images/palai.png",
        "/images/114255.png",
        "/images/114449.png",
      ],
    },
    "2": {
      title: "AcademiaHub - Gestion Académique",
      description: `AcademiaHub est une application permettant la gestion des départements, 
      matières, utilisateurs, rôles et laboratoires au sein d'un établissement académique. 
      Elle propose l'ajout, la modification, la suppression et l'affichage de ces entités.`,
      features: [
        "Gestion des Départements et Matières (CRUD, images en Blob URL)",
        "Gestion des Utilisateurs et Rôles (CRUD, biographie, photo)",
        "Gestion des Laboratoires et Équipements (CRUD, associations)",
        "Validation et gestion des erreurs côté client",
        "Intégration avec une API (Axios, Fetch)",
      ],
      technologies: [
        "React.js",
        "Axios",
        "CSS",
        "Fetch API",
        "Visual Studio Code",
        "VirtualBox",
      ],
      images: [
        "/images/1324566.png",
        "/images/25353736.png",
        "/images/5754489498.png",
      ],
    },
  };

  const project = projects[id];

  return (
    <ProtectedRoute>
      <div className="mt-4" style={{ fontFamily: "'Roboto', sans-serif" }}>
        {/* En-tête avec effet de triangle et animation alternée */}
        <div className="header-triangle py-5 mb-4 text-center position-relative">
          <div className="header-content position-relative">
            {/* Texte animé */}
            <h1 className="fw-bold animated-title">
              {project?.title || "Projet Non Trouvé"}
            </h1>
            {/* Logo conditionnel */}
            <div className="animated-logo">
              {id === "1" ? (
                <Image
                  src="/images/Le-Palais(3).png"
                  alt="Logo"
                  width={500}
                  height={250}
                  style={{ objectFit: "contain" }}
                />
              ) : id === "2" ? (
                <Image
                  src="/images/academiahublogo.png"
                  alt="AcademiaHub Logo"
                  width={200}
                  height={150}
                  style={{ objectFit: "contain" }}
                />
              ) : null}
            </div>
          </div>
        </div>

        {project ? (
          <div className="container">
            {/* Card description */}
            <div className="card shadow-sm mb-4" style={{ border: "none" }}>
              <div className="card-body" style={{ backgroundColor: "#f8f9fa" }}>
                <h2 className="card-title mb-3 text-primary">
                  {project.title}
                </h2>
                <p className="card-text" style={{ color: "#333", fontSize: "1.1rem" }}>
                  {project.description}
                </p>
              </div>
            </div>

            {/* Fonctionnalités */}
            {project.features?.length > 0 && (
              <div className="mb-4">
                <h4 className="text-secondary mb-3">Fonctionnalités</h4>
                <ul className="list-group">
                  {project.features.map((feat, i) => (
                    <li
                      className="list-group-item"
                      key={i}
                      style={{ backgroundColor: "#fff", border: "1px solid #dee2e6" }}
                    >
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            {project.technologies?.length > 0 && (
              <div className="mb-4">
                <h4 className="text-secondary mb-3">Technologies Utilisées</h4>
                <ul className="list-group list-group-horizontal">
                  {project.technologies.map((tech, i) => (
                    <li
                      key={i}
                      className="list-group-item flex-fill d-flex flex-column align-items-center"
                      style={{ backgroundColor: "#fff", border: "1px solid #dee2e6" }}
                    >
                      {tech === "HTML5" && (
                        <i className="bi bi-filetype-html fs-2 mb-1 text-danger" />
                      )}
                      {tech === "CSS3" && (
                        <i className="bi bi-filetype-css fs-2 mb-1 text-primary" />
                      )}
                      {tech === "JavaScript" && (
                        <i className="bi bi-filetype-js fs-2 mb-1 text-warning" />
                      )}
                      {tech === "React.js" && (
                        <i className="bi bi-lightning-charge fs-2 mb-1 text-info" />
                      )}
                      {tech === "Axios" && (
                        <i className="bi bi-globe fs-2 mb-1 text-success" />
                      )}
                      {tech === "CSS" && (
                        <i className="bi bi-filetype-css fs-2 mb-1 text-primary" />
                      )}
                      {tech === "Fetch API" && (
                        <i className="bi bi-cloud-arrow-down fs-2 mb-1 text-dark" />
                      )}
                      {tech === "Visual Studio Code" && (
                        <i className="bi bi-code fs-2 mb-1 text-secondary" />
                      )}
                      {tech === "VirtualBox" && (
                        <i className="bi bi-hdd-stack fs-2 mb-1 text-dark" />
                      )}
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Captures d'écran */}
            {project.images?.length > 0 && (
              <>
                <h4 className="mb-3 text-secondary">Captures d'écran</h4>
                <div className="row">
                  {project.images.map((imgSrc, i) => (
                    <div className="col-md-4 mb-4" key={i}>
                      <div className="card h-100 shadow-sm" style={{ border: "none" }}>
                        <Image
                          src={imgSrc}
                          alt={`Screenshot ${i + 1}`}
                          width={400}
                          height={250}
                          className="card-img-top"
                          style={{ objectFit: "cover", borderRadius: "8px" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="container">
            <p className="text-danger">Projet non trouvé</p>
          </div>
        )}
      </div>
      <style jsx>{`
        .header-triangle {
          background: linear-gradient(135deg, #6a11cb, #2575fc);
          color: #fff;
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
          position: relative;
        }
        .animated-title {
          animation: textFade 6s infinite;
          z-index: 2;
        }
        .animated-logo {
          animation: logoFade 6s infinite;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
        }
        @keyframes textFade {
          0%, 45% {
            opacity: 1;
          }
          46%, 55% {
            opacity: 0;
          }
          56%, 100% {
            opacity: 1;
          }
        }
        @keyframes logoFade {
          0%, 45% {
            opacity: 0;
          }
          46%, 55% {
            opacity: 1;
          }
          56%, 100% {
            opacity: 0;
          }
        }
      `}</style>
    </ProtectedRoute>
  );
}
