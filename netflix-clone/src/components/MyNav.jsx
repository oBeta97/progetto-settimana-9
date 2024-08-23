import { Component } from "react";
import logo from '../assets/img/netflix_logo.png'

class MyNav extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-black text-light" data-bs-theme="dark">
            <div className="container-fluid">
                <a href="./index.html" style={{zIndex: "9999"}}>
                    <img src={logo} className="navbar-brand img-fluid" width="120px" alt="netflix logo" />
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link text-light" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active fw-bold text-light" href="#">TV Shows</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Movies</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Recently Added</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">My List</a>
                        </li>
                    </ul>

                    <div className="navbar navbar-expand-lg bg-black text-light">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <i className="text-light bi bi-search nav-link "></i>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link text-light">KIDS</span>
                            </li>
                            <li className="nav-item">
                                <i className="text-light bi bi-bell-fill nav-link"></i>
                            </li>
                            <li className="nav-item dropdown ">
                                <a className="nav-link dropdown-toggle text-light" href="#" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="bg-success px-1 py-2 rounded text-light">
                                        (¬‿¬)
                                    </span>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end bg-black-subtle">
                                    <li>
                                        <a className="dropdown-item" href="./settings.html">Settings</a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="./profile.html" data-bs-toggle="modal"
                                            data-bs-target="#profileModal">
                                            <i className="text-secondary bi bi-person-fill"></i>
                                            Profile
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </nav>
        )
    }
}


export default MyNav;