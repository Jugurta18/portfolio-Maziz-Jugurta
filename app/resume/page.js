"use client";
import Link from "next/link";

export default function ResumePage() {
  return (
    <div
      className="py-5"
      style={{
        
        background: "linear-gradient(to right, #e3f2fd, #e0f7fa)",
        minHeight: "100vh",
      }}
    >
      <div className="container" style={{ maxWidth: "900px" }}>
        {/* Card principale */}
        <div className="card shadow-lg p-4" style={{ backgroundColor: "#fefefe" }}>
          {/* En-tête / Nom / Coordonnées */}
          <header className="text-center mb-5">
            <h1 className="fw-bold mb-3 display-6">MAZIZ JUGURTA</h1>
            <p className="mb-1 fs-5">514-451-0952</p>
            <p className="mb-1 fs-5">
              <a
                href="mailto:jugurtamaziz1994@gmail.com"
                className="text-decoration-none text-dark"
              >
                jugurtamaziz1994@gmail.com
              </a>
            </p>
            <p className="fs-5">334 Stone Quarry Private Ottawa, ON K1K 3Y2</p>
          </header>

          {/* Profil */}
          <section className="mb-4">
            <h2 className="h4 fw-bold border-bottom pb-2">PROFIL</h2>
            <p>
              Organisé et ponctuel, sociable et joueur d'équipe, disposant d'une
              communication efficace et d'un grand sens de responsabilité.
              Excellente capacité d'adaptation et apprentissage rapide dans
              divers domaines, avec un engagement envers la confidentialité.
            </p>
          </section>

          {/* Expérience Professionnelle */}
          <section className="mb-4">
            <h2 className="h4 fw-bold border-bottom pb-2">
              EXPÉRIENCE PROFESSIONNELLE
            </h2>

            {/* Exp 1: Chargé de communication */}
            <div className="mb-3">
              <h5 className="fw-semibold">
                Chargé de communication | Juillet 2021 – Juillet 2022
              </h5>
              <p className="mb-1 text-muted">
                Groupe Industriel Khelifi (Algérie)
              </p>
              <ul className="mb-2">
                <li>Service à la clientèle</li>
                <li>
                  Communication efficace avec les clients et prospects, image de
                  marché positive
                </li>
                <li>Réception / transfert des appels téléphoniques</li>
                <li>
                  Tâches administratives : numérisation, télécopie, classement,
                  suivi des employés, conception graphique, facturation, etc.
                </li>
                <li>
                  Participation à des salons et expositions (Djazagro) au Palais
                  des Expositions d'Alger
                </li>
              </ul>
            </div>

            {/* Exp 2: Travailleur journalier 1 */}
            <div className="mb-3">
              <h5 className="fw-semibold">
                Travailleur journalier | Sept. 2023 – Avril 2024
              </h5>
              <p className="mb-1 text-muted">Indépendante store</p>
              <ul>
                <li>Employé de stock</li>
                <li>Employé de comptoir</li>
              </ul>
            </div>

            {/* Exp 3: Randstad Interim */}
            <div className="mb-3">
              <h5 className="fw-semibold">
                Manutentionnaire (Contrat Temporaire) | Mai 2024 – Août 2024
              </h5>
              <p className="mb-1 text-muted">Randstad Interim Inc – Catelli</p>
              <ul>
                <li>
                  Gestion des matériaux, gestion des stocks et opérations
                  d'entrepôt
                </li>
                <li>Chargement / déchargement et organisation efficace</li>
                <li>
                  Maintien d’un environnement de travail propre et sécurisé
                </li>
              </ul>
            </div>

            {/* Exp 4: Travailleur journalier 2 */}
            <div>
              <h5 className="fw-semibold">
                Travailleur journalier | Sept. 2024 – Présent
              </h5>
              <p className="mb-1 text-muted">Indépendante store</p>
              <ul>
                <li>Employé de stock</li>
                <li>Employé de comptoir</li>
              </ul>
            </div>
          </section>

          {/* Éducation */}
          <section className="mb-4">
            <h2 className="h4 fw-bold border-bottom pb-2">ÉDUCATION</h2>
            <ul className="mb-0">
              <li>
                <strong>En cours :</strong> Diplôme en Programmation
                Informatique, Collège La Cité, <em>Juin 2025</em>
              </li>
              <li>
                Formation en vente en pharmacie, 2020, École ABP à El Kseur,
                Algérie
              </li>
              <li>
                Master en communication et relations publiques, 2019, Université
                Abderrahmane Mira, Béjaïa
              </li>
            </ul>
          </section>

          {/* Internships / Stages */}
          <section className="mb-4">
            <h2 className="h4 fw-bold border-bottom pb-2">INTERNSHIPS / STAGES</h2>
            <ul className="mb-0">
              <li>
                Stage au sein de l’entreprise SARL RAMDY (Production
                agroalimentaire – Algérie), 2017
              </li>
              <li>Stage de fin de cycle au sein de l'entreprise SARL IFRI, 2019</li>
            </ul>
          </section>

          {/* Langues */}
          <section className="mb-4">
            <h2 className="h4 fw-bold border-bottom pb-2">LANGUES</h2>
            <ul className="mb-0">
              <li>Amazigh : natif</li>
              <li>Arabe : avancé</li>
              <li>Français : avancé</li>
              <li>Anglais : intermédiaire</li>
            </ul>
          </section>

          {/* Qualifications */}
          <section>
            <h2 className="h4 fw-bold border-bottom pb-2">QUALIFICATIONS</h2>
            <ul className="mb-0">
              <li>Design graphique (Illustrator & Photoshop)</li>
              <li>Montage vidéo (Wondershare Filmora)</li>
              <li>Conception de cuisines et garde-robes (Kitchen Draw)</li>
              <li>Gestion réseaux sociaux et sites web</li>
              <li>Publicité commerciale sur Facebook</li>
              <li>Création de sites web de A à Z (WordPress)</li>
              <li>Microsoft Office (Word, Excel, PowerPoint, MS Project)</li>
              <li>
                Réparation et assemblage d'ordinateurs (formatage, nettoyage,
                hardware, software)
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
