export default function NotFound() {
  return (
    <>
      <div className="ph1">
        <div className="wrap-wide">
          <h1>Page not found</h1>
          <p>That page doesn&apos;t exist or has moved.</p>
        </div>
      </div>
      <section>
        <div className="wrap-wide">
          <div className="cta-row">
            <a className="btn btn-m" href="/">Go to the homepage</a>
            <a className="btn btn-o" href="/contact">Contact us</a>
          </div>
        </div>
      </section>
    </>
  );
}
