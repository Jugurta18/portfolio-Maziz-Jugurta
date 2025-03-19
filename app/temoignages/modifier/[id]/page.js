"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_TEMOIGNAGE } from "../../../../src/redux/slices/temoignagesSlice";
import { useRouter, useParams } from "next/navigation";
import ProtectedRoute from "../../../../src/components/ProtectedRoute";

export default function ModifierTemoignage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = useParams(); // Récupère l'id depuis l'URL
  console.log("ModifierTemoignage - ID from URL:", id);

  const temoignages = useSelector((state) => state.temoignages.list);
  console.log("ModifierTemoignage - Temoignages list:", temoignages);

  const [content, setContent] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Recherche du témoignage correspondant à l'id lors du montage du composant
  useEffect(() => {
    const found = temoignages.find((t) => t.id === Number(id));
    console.log("ModifierTemoignage - Found testimonial:", found);
    if (found) {
      setContent(found.content);
    } else {
      setErrorMsg("Témoignage non trouvé.");
      console.error("ModifierTemoignage - Error: Témoignage non trouvé pour ID:", id);
    }
  }, [id, temoignages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ModifierTemoignage - handleSubmit triggered, content:", content);
    if (!content.trim()) {
      setErrorMsg("Le témoignage ne peut pas être vide.");
      console.error("ModifierTemoignage - Error: Content is empty.");
      return;
    }
    dispatch(UPDATE_TEMOIGNAGE({ id: Number(id), content }));
    console.log("ModifierTemoignage - Dispatching update for ID:", id, "with content:", content);
    router.push("/temoignages/liste");
  };

  return (
    <ProtectedRoute>
      <div className="container mt-5">
        <h2 className="mb-4">Modifier le témoignage</h2>
        {errorMsg && <p className="text-danger">{errorMsg}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <textarea
              placeholder="Votre témoignage"
              value={content}
              onChange={(e) => {
                console.log("ModifierTemoignage - onChange:", e.target.value);
                setContent(e.target.value);
              }}
              required
              className="form-control"
              rows="4"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sauvegarder
          </button>
        </form>
      </div>
    </ProtectedRoute>
  );
}
