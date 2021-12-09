import React from "react";
import {Routes, Route,Link} from "react-router-dom";

const Nav=()=> {
  let logged = true;
  return (
    <div className="container-fluid main-container">
      <div className="sticky-top bg-main-dark">
        <nav className="navbar sticky-top navbar-expand-lg bg-main-dark color-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Star Wars
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end bg-main-dark"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  Offcanvas
                </h5>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body ">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <i class="fab fa-jedi-order fa-5x icon-starwars"></i>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/movies">
                      movies
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/characters">
                      characters
                    </Link>
                  </li>
                </ul>
                {
                  <div className="session-actions">
                    {logged ? (
                      <button className="btn btn-danger">Logout</button>
                    ) : (
                      <button className="btn btn-primary">Login</button>
                    )}
                  </div>
                }
              </div>
            </div>
          </div>
        </nav>
      </div>
      <section>
        <Routes>
          <Route index path="/" />
          <Route path="/movies" /* element={<Nav />} */ />
          <Route path="/characters" />
        </Routes>
      </section>
    </div>
  );
}

export default Nav;
