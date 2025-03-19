"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { REGISTER } from "../../src/redux/slices/authSlice";
import { useRouter } from "next/navigation";

export default function Inscription() {
  const dispatch = useDispatch();
  const router = useRouter();

  // Champs du formulaire
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !phone || !email || !password || !confirmPass) {
      setErrorMsg("Veuillez remplir tous les champs.");
      return;
    }
    if (password !== confirmPass) {
      setErrorMsg("Les mots de passe ne correspondent pas.");
      return;
    }
    const newUser = { firstName, lastName, phone, email, password };
    dispatch(REGISTER(newUser));
    router.push("/");
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        background: 'url("/images/3230320.jpg") no-repeat center center/cover',
      }}
    >
      <div className="container" style={{ maxWidth: "600px" }}>
        <div
          className="card shadow p-4"
          style={{ backgroundColor: "rgba(255,255,255,0.8)", borderRadius: "8px" }}
        >
          <h2 className="mb-4 text-center">Inscription</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label fw-semibold">
                Prénom
              </label>
              <input
                type="text"
                id="firstName"
                className="form-control"
                placeholder="Votre prénom"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label fw-semibold">
                Nom
              </label>
              <input
                type="text"
                id="lastName"
                className="form-control"
                placeholder="Votre nom"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label fw-semibold">
                Téléphone
              </label>
              <input
                type="tel"
                id="phone"
                className="form-control"
                placeholder="Votre numéro de téléphone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Votre adresse email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-semibold">
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Votre mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPass" className="form-label fw-semibold">
                Confirmer le mot de passe
              </label>
              <input
                type="password"
                id="confirmPass"
                className="form-control"
                placeholder="Confirmez votre mot de passe"
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
                required
              />
            </div>
            {errorMsg && <p className="text-danger">{errorMsg}</p>}
            <button type="submit" className="btn btn-primary w-100">
              S'inscrire
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
