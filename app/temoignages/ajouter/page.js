"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_TEMOIGNAGE } from "../../../src/redux/slices/temoignagesSlice";
import { useRouter } from "next/navigation";
import ProtectedRoute from "../../../src/components/ProtectedRoute";

export default function AjouterTemoignage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [content, setContent] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) {
      setErrorMsg("Le témoignage ne peut pas être vide.");
      return;
    }

    // Ajouter le témoignage au store
    dispatch(ADD_TEMOIGNAGE({ id: Date.now(), content }));
    router.push("/temoignages/liste");
  };

  return (
    <ProtectedRoute>
      <div className="container mt-5">
        <h2 className="mb-4">Laisser un témoignage</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <textarea
              placeholder="Votre témoignage"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="form-control"
              rows="4"
            />
          </div>
          {errorMsg && <p className="text-danger">{errorMsg}</p>}
          <button type="submit" className="btn btn-primary">
            Envoyer
          </button>
        </form>
      </div>
    </ProtectedRoute>
  );
}
