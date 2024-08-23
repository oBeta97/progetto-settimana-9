import { Component } from "react";
import logo from '../assets/img/netflix_logo.png'
import { Collapse } from "react-bootstrap";


class MyNav extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-black text-light" data-bs-theme="dark">
            <div className="container-fluid">
                <a href="./index.html" style={{zIndex: "9999"}}>
                    <img src={logo} class="navbar-brand img-fluid" width="120px" alt="netflix logo" />
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link text-light" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active fw-bold text-light" href="#">TV Shows</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">Movies</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">Recently Added</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">My List</a>
                        </li>
                    </ul>

                    <div class="navbar navbar-expand-lg bg-black text-light">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <i class="text-light bi bi-search nav-link "></i>
                            </li>
                            <li class="nav-item">
                                <span class="nav-link text-light">KIDS</span>
                            </li>
                            <li class="nav-item">
                                <i class="text-light bi bi-bell-fill nav-link"></i>
                            </li>
                            <li class="nav-item dropdown ">
                                <a class="nav-link dropdown-toggle text-light" href="#" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <span class="bg-success px-1 py-2 rounded text-light">
                                        (¬‿¬)
                                    </span>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end bg-black-subtle">
                                    <li>
                                        <a class="dropdown-item" href="./settings.html">Settings</a>
                                    </li>
                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="./profile.html" data-bs-toggle="modal"
                                            data-bs-target="#profileModal">
                                            <i class="text-secondary bi bi-person-fill"></i>
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