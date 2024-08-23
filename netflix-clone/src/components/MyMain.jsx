import MyMainTitle from "./MyMainTitle";
import CarouselSection from "./CarouselSection";
import { Component } from "react";
import { Alert } from "bootstrap";

class MyMain extends Component {

    state = {
        fetchError: false
    };

    render() {
        return (
            <>
                <MyMainTitle />

                {
                    this.state.fetchError ? (
                        <Alert variant="Warning">
                            Errore nella fetch!
                        </Alert>
                    ) : (
                        <>
                            <CarouselSection title="dark souls" onFetchError={() => this.handleFetchError()} />

                            <CarouselSection title="film non trovato" onFetchError={() => this.handleFetchError()} />

                            <CarouselSection title="Alien" onFetchError={() => this.handleFetchError()} />

                        </>
                    )
                }
            </>
        );
    }


    handleFetchError = () =>{
        this.setState({ ...this.state, fetchError: true })
    }

}


export default MyMain;