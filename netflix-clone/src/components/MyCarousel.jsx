import "react-multi-carousel/lib/styles.css";

import { Component } from "react";
import Carousel from "react-multi-carousel";
import { Alert, Spinner } from "react-bootstrap";


import { getFilms } from "../modules/fetches";


class MyCarousel extends Component {

    state = {
        isLoading: true,
        searchRes: {},
    }

    responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    render() {
        return (
            <>

                {
                    this.state.isLoading ? (
                        <Spinner animation="grow" variant="danger" />
                    ) : this.state.searchRes.Response === "False" ?
                        (
                            <Alert variant='danger'>
                                {this.state.searchRes.Error}
                            </Alert>
                        ) :

                        (
                            <Carousel responsive={this.responsive}>
                                {

                                    this.state.searchRes.Search.map((film) =>
                                        <div key={film.imdbID}>
                                            <img src={film.Poster} style={{ maxHeight: "20em" }} alt="image not found" />
                                        </div>
                                    )
                                }
                            </Carousel>
                        )
                }
            </>
        )
    }

    componentDidMount = () => {
        this.fetch(this.props.title)
    }

    fetch = async (searchString) => {

        // const searchResult = await getFilms(searchString);

        // console.log('searchResult', searchResult);

        // this.setState({
        //     ...this.state,

        //     searchRes: searchResult,
        //     isLoading: false,
        // })

        fetch('http://www.omdbapi.com/?apikey=66a19e9&s=' + searchString)
            .then(response => {
                if (response.ok) {
                    // la chiamata ha tornato 200
                    return response.json()
                } else {
                    // la chiamata ha tornato 400, 401, 403, 404, 500
                    throw new Error('La chiamata non è andata a buon fine')
                }
            })
            .then(searchObj => {
                console.log(searchObj);

                this.setState({
                    ...this.state,

                    searchRes: searchObj,
                    isLoading: false,
                })
            })
            .catch(error => {
                console.error(error);
                // console.log('title nel catch', this.props.title)
                // // Per qualche oscuro motivo react pensa che onFetchError sia una classe e non una callback
                // this.props.onFetchError()
            })

    }

    handleFetchError = () => {
        
    }
}


export default MyCarousel;