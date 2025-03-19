"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const router = useRouter();
  const [path, setPath] = useState("");

  useEffect(() => {
    // Récupère le chemin actuel côté client
    setPath(window.location.pathname);
  }, []);

  useEffect(() => {
    // Si l'utilisateur n'est pas authentifié et que le chemin est défini,
    // redirige vers la page de connexion.
    if (!isAuthenticated && path && path !== "/login" && path !== "/inscription") {
      router.push("/login");
    }
  }, [isAuthenticated, path, router]);

  // On retourne le contenu que si l'utilisateur est authentifié,
  // sinon rien n'est affiché pendant la redirection.
  return isAuthenticated ? children : null;
}
