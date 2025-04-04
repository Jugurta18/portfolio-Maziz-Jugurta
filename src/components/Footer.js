import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-light py-3 mt-auto">
      <div className="container text-center">
        <p className="mb-0">
          {/* Icône GitHub */}
          <Link
            href="https://github.com/Jugurta18/portfolio-Maziz-Jugurta"
            target="_blank"
            rel="noopener noreferrer"
            className="me-3 text-dark"
          >
            <i className="bi bi-github fs-3" />
          </Link>

          {/* Icône LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/jugurta-maziz-6236b7356/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark"
          >
            <i className="bi bi-linkedin fs-3" />
          </Link>
        </p>
      </div>
    </footer>
  );
}
