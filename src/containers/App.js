import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';


class App extends Component {
    constructor() {
        super()
        // super() serve a chiamare il "constructor" del componente
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        // Da notare che essendo parte di React non c'è bisogno di usare Arrow Function
        fetch('https://jsonplaceholder.typicode.com/users')
            // Con "fetch" prendiamo la lista degli "users" dal link indicato
            .then(response => {
                return response.json();
                // Riceveremo una risposta di cui parleremo dopo
            })
            .then(users => {
                this.setState({ robots: users })
                // Aggiorniamo gli utenti con setState
            })
    }

    onSearchChange = (event) => {
        // Ogni volta che creiamo un nostro metodo su un componente dobbiamo usare le arrow function 

        this.setState({ searchfield: event.target.value })
        // È un metodo di React, potremmo anche scrivere "this.state.searchfield =". 
        // Questa striscia di codice da il valore inserito nel campo di input a "searchfield"


    }
    // onSearchChange è una funzione che ha creato con un nome di usa invenzione

    render() {

        const filteredRobots = this.state.robots.filter(robot => {
            // Filtra il nostro array

            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
            // In questo modo converte i "name" filtrati in "lower case". Il metodo includes()
            // determina se un array include un certo valore tra le sue voci, restituendo true o false a seconda dei casi.
            // Questa striscia di codice ci dice se i nomi inseriti nel campo di ricerca corrispondono a quelli dell'array.
        })

        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            );
        }

    }

}


export default App;