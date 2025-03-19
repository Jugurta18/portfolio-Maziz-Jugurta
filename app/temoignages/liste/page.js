"use client";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { DELETE_TEMOIGNAGE } from "../../../src/redux/slices/temoignagesSlice";
import ProtectedRoute from "../../../src/components/ProtectedRoute";
import Image from "next/image";

export default function ListeTemoignages() {
  const temoignages = useSelector((state) => state.temoignages.list);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(DELETE_TEMOIGNAGE(id));
  };

  return (
    <ProtectedRoute>
      {/* SECTION de fond (en-tête) */}
      <div
        className="py-5 text-center text-white"
        style={{
          backgroundImage: "url('/images/tem.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">Témoignages </h1>
          <p className="lead">
          Voici quelques témoignages des personnes qui aiment MyPortfolio.
          </p>
        </div>
      </div>

      {/* LISTE DES TÉMOIGNAGES */}
      <div className="container py-5">
        {temoignages.length === 0 ? (
          <p className="text-center fs-5">
            Aucun témoignage pour le moment.
            <br />
            <Link href="/temoignages/ajouter" className="btn btn-primary mt-3">
              Laisser un témoignage
            </Link>
          </p>
        ) : (
          <>
            <div className="text-center mb-4">
              <Link href="/temoignages/ajouter" className="btn btn-success">
                Laisser un témoignage
              </Link>
            </div>

            <div className="row g-4">
              {temoignages.map((t) => (
                <div className="col-md-6 col-lg-4" key={t.id}>
                  <div className="bg-light p-4 h-100 rounded shadow-sm d-flex flex-column">
                    {/* Avatar & Nom */}
                    <div className="d-flex align-items-center mb-3">
                      <Image
                        src={t.avatar ? t.avatar : "/images/default.jpg"}
                        alt="Avatar"
                        width={100}
                        height={100}
                        className="rounded-circle me-3"
                        style={{ objectFit: "cover" }}
                      />
                      <div>
                        <h5 className="mb-0">{t.name || "Anonyme"}</h5>
                        <small className="text-muted">Client Professionnel</small>
                      </div>
                    </div>

                    {/* Contenu du témoignage */}
                    <div className="flex-grow-1">
                      <p className="mb-0">{t.content}</p>
                    </div>

                    {/* Boutons éventuels */}
                    <div className="text-end mt-3">
                      <Link
                       href={`/temoignages/modifier/${t.id}`} className="btn btn-warning btn-sm me-2">
                       Modifier
                     </Link>
                     
                      <button
                        onClick={() => handleDelete(t.id)}
                        className="btn btn-danger btn-sm"
                      >
                        Supprimer
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </ProtectedRoute>
  );
}
