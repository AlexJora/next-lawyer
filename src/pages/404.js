import Link from "next/link";

export default function Custom404() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
      <h5>Eroare 404</h5>
      <p>Pagina nu a putut fi găsită.</p>
      <p>
        <Link href="/">Acasa</Link>
      </p>
    </div>
  );
}
