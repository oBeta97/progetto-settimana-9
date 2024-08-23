

const MyMain = () => {

    return (
        <>
            <section class="container-fluid px-4 my-3">

                <section class="row">
                    <div class="col-4 col-sm-3 col-lg-2">
                        <h2>TV Shows</h2>
                    </div>

                    <div class="col-1">
                        <div class="dropdown">
                            <button class="btn btn-dark border border-1 border-light dropdown-toggle" type="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Genres
                            </button>
                            <ul class="dropdown-menu bg-black-subtle">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Thriller</a></li>
                                <li><a class="dropdown-item" href="#">Comedy</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col">
                        <div class="btn-group btn-group-sm float-end" role="group" aria-label="Small button group">
                            <button type="button" class="btn btn-outline-light">
                                <i class="bi bi-list mx-1"></i>
                            </button>
                            <button type="button" class="btn btn-outline-light">
                                <i class="bi bi-grid mx-1"></i>
                            </button>
                        </div>
                    </div>
                </section>

            </section>

            {/* <!-- TRENDING NOW --> */}
            <section class="container-fluid px-4 my-5">

                <section class="row">
                    <h4>Trending Now</h4>
                </section>

                <section class="row">

                    <div id="TrendingNow" class="carousel slide">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="row row-cols-5 align-items-sm-center g-1">
                                    <div class="col d-flex justify-content-center">
                                        <img src="./assets/img/series/media0.webp" class="img-fluid" alt="..." />
                                    </div>
                                    <div class="col d-flex justify-content-center">
                                        <img src="./assets/img/series/media1.jpg" class="img-fluid" alt="..." />
                                    </div>
                                    <div class="col d-flex justify-content-center">
                                        <img src="./assets/img/series/media2.webp" class="img-fluid" alt="..." />
                                    </div>
                                    <div class="col d-flex justify-content-center">
                                        <img src="./assets/img/series/media3.webp" class="img-fluid" alt="..." />
                                    </div>
                                    <div class="col d-flex justify-content-center">
                                        <img src="./assets/img/series/media4.jpg" class="img-fluid" alt="..." />
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="row row-cols-5 align-items-sm-center g-1">
                                    <div class="col d-flex justify-content-center">
                                        <img src="./assets/img/series/media5.webp" class="img-fluid" alt="..." />
                                    </div>
                                    <div class="col d-flex justify-content-center">
                                        <img src="./assets/img/series/media6.jpg" class="img-fluid" alt="..." />
                                    </div>
                                    <div class="col d-flex justify-content-center">
                                        <img src="./assets/img/series/media7.webp" class="img-fluid" alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#TrendingNow"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#TrendingNow"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>


                </section>

            </section>

            {/* <!-- WATCH IT AGAIN --> */}
            <section class="container-fluid px-4 my-5">

                <section class="row">
                    <h4>Watch It Again</h4>
                </section>

                <section class="row">

                    <div id="WatchItAgain" class="carousel slide">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="row row-cols-5 align-items-sm-center g-1">
                                    <div class="col d-flex justify-content-center">
                                        <img src="./assets/img/series/media8.webp" class="img-fluid" alt="..." />
                                    </div>
                                    <div class="col d-flex justify-content-center">
                                        <img src="./assets/img/series/media9.jpg" class="img-fluid" alt="..." />
                                    </div>
                                    <div class="col d-flex justify-content-center">
                                        <img src="./assets/img/series/media10.jpg" class="img-fluid" alt="..." />
                                    </div>
                                    <div class="col d-flex justify-content-center">
                                        <img src="./assets/img/series/media11.jpg" class="img-fluid" alt="..." />
                                    </div>
                                    <div class="col d-flex justify-content-center">
                                        <img src="./assets/img/series/media12.jpg" class="img-fluid" alt="..." />
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="row row-cols-5 align-items-sm-center g-1">
                                    <div class="col d-flex justify-content-center">
                                        <img src="./assets/img/series/media13.jpg" class="img-fluid" alt="..." />
                                    </div>
                                    <div class="col d-flex justify-content-center">
                                        <img src="./assets/img/series/media14.webp" class="img-fluid" alt="..." />
                                    </div>
                                    <div class="col d-flex justify-content-center">
                                        <img src="./assets/img/series/media15.jpg" class="img-fluid" alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#WatchItAgain"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#WatchItAgain"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>


                </section>

            </section>

            {/* <!-- NEW RELEASES --> */}
            <section class="container-fluid px-4 my-5">

                <section class="row">
                    <h4>New Releases</h4>
                </section>

                <section class="row">

                    <div id="NewReleases" class="carousel slide">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="row row-cols-5 align-items-sm-center g-1">
                                    <div class="col d-flex justify-content-center">
                                        <img src="./assets/img/series/media16.webp" class="img-fluid" alt="..." />
                                    </div>
                                    <div class="col d-flex justify-content-center">
                                        <img src="./assets/img/series/media17.jpg" class="img-fluid" alt="..." />
                                    </div>
                                    <div class="col d-flex justify-content-center">
                                        <img src="./assets/img/series/media18.jpg" class="img-fluid" alt="..." />
                                    </div>
                                    <div class="col d-flex justify-content-center">
                                        <img src="./assets/img/series/media19.webp" class="img-fluid" alt="..." />
                                    </div>
                                    <div class="col d-flex justify-content-center">
                                        <img src="./assets/img/series/media20.jpg" class="img-fluid" alt="..." />
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="row row-cols-5 align-items-sm-center g-1">
                                    <div class="col d-flex justify-content-center">
                                        <img src="./assets/img/series/media21.webp" class="img-fluid" alt="..." />
                                    </div>
                                    <div class="col d-flex justify-content-center">
                                        <img src="./assets/img/series/media22.webp" class="img-fluid" alt="..." />
                                    </div>
                                    <div class="col d-flex justify-content-center">
                                        <img src="./assets/img/series/media23.webp" class="img-fluid" alt="..." />
                                    </div>
                                    <div class="col d-flex justify-content-center">
                                        <img src="./assets/img/series/media24.jpg" class="img-fluid" alt="..." />
                                    </div>
                                    <div class="col d-flex justify-content-center">
                                        <img src="./assets/img/series/media25.webp" class="img-fluid" alt="..." />
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="row row-cols-5 align-items-sm-center g-1">
                                    <div class="col d-flex justify-content-center">
                                        <img src="./assets/img/series/media26.webp" class="img-fluid" alt="..." />
                                    </div>
                                    <div class="col d-flex justify-content-center">
                                        <img src="./assets/img/series/media27.jpg" class="img-fluid" alt="..." />
                                    </div>
                                    <div class="col d-flex justify-content-center">
                                        <img src="./assets/img/series/media28.jpg" class="img-fluid" alt="..." />
                                    </div>
                                    <div class="col d-flex justify-content-center">
                                        <img src="./assets/img/series/media29.jpg" class="img-fluid" alt="..." />
                                    </div>
                                    <div class="col d-flex justify-content-center">
                                        <img src="./assets/img/series/media30.jpg" class="img-fluid" alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#NewReleases"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#NewReleases"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>


                </section>

            </section>

        </>
    );

}


export default MyMain;