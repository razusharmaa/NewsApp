import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar(props) {
  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.themeTxt}>
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">NewsX</NavLink>


          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={props.theme} onClick={props.themecontrol} />

            <label className="form-check-label" htmlFor="flexSwitchCheckChecked"></label>
          </div>


          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active"  aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item"><NavLink  className="nav-link" to="/business">Business</NavLink></li>
              <li className="nav-item"><NavLink  className="nav-link" to="/entertainment">Entertainment</NavLink></li>
              <li className="nav-item"><NavLink  className="nav-link" to="/health">Health</NavLink></li>
              <li className="nav-item"><NavLink  className="nav-link" to="/science">Science</NavLink></li>
              <li className="nav-item"><NavLink  className="nav-link" to="/sports">Sports</NavLink></li>
              <li className="nav-item"><NavLink  className="nav-link" to="/technology">Technology</NavLink></li>

            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>


)
}