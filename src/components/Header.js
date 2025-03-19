"use client";
import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { LOGOUT } from "../redux/slices/authSlice";
import { useRouter } from "next/navigation";

export default function Header() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(LOGOUT());
    router.push("/login");
  };

  return (
    <header className="bg-light py-3 mb-4">
      <nav className="container d-flex justify-content-between align-items-center">
        {/* mon LOGO et Nom de mon site */}
        <Link href="/" className="d-flex align-items-center text-decoration-none">
          <Image
            src="/images/briefcase_12958683 (1).png"   
            alt="Logo MyPortfolio"
            width={40}               
            height={40}             
            className="me-2"
          />
          <span className="fw-bold text-dark">MyPortfolio</span>
        </Link>

        {/* Liens de navigation */}
        <div className="d-flex gap-2">
          <Link href="/" className="btn btn-outline-primary">
            Accueil
          </Link>
          {isAuthenticated ? (
            <>
              <Link href="/projets/1" className="btn btn-outline-primary">
                Projet 1
              </Link>
              <Link href="/projets/2" className="btn btn-outline-primary">
                Projet 2
              </Link>
              <Link href="/temoignages/liste" className="btn btn-outline-primary">
                Témoignages
              </Link>
              <button onClick={handleLogout} className="btn btn-danger">
                Déconnexion
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="btn btn-outline-primary">
                Connexion
              </Link>
              <Link href="/inscription" className="btn btn-outline-primary">
                Inscription
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
