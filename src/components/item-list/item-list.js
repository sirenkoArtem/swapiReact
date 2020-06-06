import React, {Component} from "react";
import './item-list.scss';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

export default class ItemList extends Component{

    swapiService = new SwapiService();

    state = {
        peopleList: null
    };

    componentDidMount() {
        this.swapiService
            .getAllPeople()
            .then(peopleList => {
                this.setState({
                    peopleList
                })
            })
    }

    renderItems(arr) {
        return arr.map(({id, name}) => {
            return (
                <a href="#"
                   onClick={() => this.props.onItemSelected(id)}
                   className="list-group-item list-group-item-action"
                   key={id}>{name}
                </a>
            )
        })
    }

    render(){

        const {peopleList} = this.state;

        if(!peopleList) {
            return <Spinner />
        }

        const items = this.renderItems(peopleList);

        return(
            <div className="list-group item-list">
                {items}
            </div>
        )
    }
};