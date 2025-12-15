import '../Styleheets/NavBar.css'


export const Navbar = ({ CambioImage }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white py-3">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src={CambioImage}
              alt="Logo Hensis"
              className="img-fluid"
              style={{ maxWidth: '150px' }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav gap-3 gap-lg-5 text-center text-lg-start">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#nuestra-marca">
                  Nuestra Marca
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#comic">
                  Comic
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#tienda">
                  Tienda
                </a>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </>
  )
}