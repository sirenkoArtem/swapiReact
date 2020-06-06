import React, {Component} from 'react';
import './random-planet.scss';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

export default class RandomPlanet extends Component{

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true
    };

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 3000);
    }

    onPlanetLoaded = planet => {
        this.setState({
            planet,
            loading: false,
            error: false
        });
    };

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random()*15) + 2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    };

    render() {

        const { planet, loading, error } = this.state;

        const hasData = !(loading || error);

        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <PlanetView planet={planet} /> : null;
        const errorMessage = error ? <ErrorIndicator /> : null;

        return(
            <div className="random-planet-wrapper">
                { errorMessage }
                { spinner }
                { content }
            </div>
        )
    }
}

const PlanetView = ({ planet }) => {

    const { id, name, population,
        rotationPeriod, diameter } = planet;

    return(
        <React.Fragment>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                 alt="Earth"/>
            <div className="random-planet-info">
                <h3>{name}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population </span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period </span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter </span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
};