export default function ContactPage() {
    return (
      <div
        className="text-white d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: "url('/images/5124556.jpg')", 
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh", // Occupation totale de l'écran
          fontFamily: "Trebuchet MS, sans-serif", // Police personnalisée
        }}
      >
        {/*  noir semi-transparent */}
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <h1 className="mb-4">Contact</h1>
          <p className="fs-5 mb-1">MAZIZ JUGURTA</p>
          <p className="fs-5 mb-1">514-451-0952</p>
          <p className="fs-5 mb-1">
            <a
              href="mailto:jugurtamaziz1994@gmail.com"
              className="text-white text-decoration-none"
            >
              jugurtamaziz1994@gmail.com
            </a>
          </p>
          <p className="fs-5">
            334 Stone Quarry Private Ottawa, ON K1K 3Y2
          </p>
        </div>
      </div>
    );
  }
  