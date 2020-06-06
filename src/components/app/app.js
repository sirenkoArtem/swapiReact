import React, {Component} from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import './app.scss';

export default class App extends Component{

    state = {
        selectedPerson: null
    };

    onItemSelected = id => {
        this.setState({
            selectedPerson: id
        })
    };

    render() {
        return(
            <div className="app-wrapper">
                <Header />
                <RandomPlanet />
                <ItemList onItemSelected={this.onItemSelected}/>
                <PersonDetails personId={this.state.selectedPerson}/>
            </div>
        );
    }
};