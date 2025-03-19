"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync } from "../../src/redux/slices/authSlice";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { status, error } = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Réinitialiser l'erreur avant la soumission
    setErrorMsg("");
    if (!email || !password) {
      setErrorMsg("Veuillez remplir tous les champs.");
      return;
    }
    try {
      await dispatch(loginAsync({ email, password })).unwrap();
      router.push("/");
    } catch (err) {
      setErrorMsg("Identifiants invalides.");
    }
  };

  // Réinitialiser le message d'erreur dès qu'un champ change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (errorMsg) setErrorMsg("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (errorMsg) setErrorMsg("");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: 'url("/images/connexion.jpg") no-repeat center center/cover',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="container" style={{ maxWidth: "450px" }}>
        <div
          className="card shadow p-4"
          style={{
            backgroundColor: "rgba(255,255,255,0.8)",
            borderRadius: "8px",
          }}
        >
          <h2 className="mb-4 text-center">Connexion</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                required
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={handlePasswordChange}
                required
                className="form-control"
              />
            </div>
            {errorMsg && <p className="text-danger">{errorMsg}</p>}
            {status === "loading" && <p>Connexion en cours...</p>}
            <button type="submit" className="btn btn-primary w-100">
              Se connecter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
