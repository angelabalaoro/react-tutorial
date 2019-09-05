import React, { Component } from 'react';
import AppRouter from './AppRouter';
import Table from './Table';
import Form from './Form';

import { BrowserRouter as Router, Redirect } from 'react-router-dom';


class App extends Component {
    state = {
        characters: [],
        selectedCharacter: null,
        toDetail: false
    };

    viewCharacter = index => {
        const { characters } = this.state;                

        this.setState({
            toDetail: true,
            selectedCharacter: characters.filter((character, i) => { 
                return i === index;
            })
        }, function () {
        });
    }

    removeCharacter = index => {
        const { characters } = this.state;
    
        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    render() {
        const { characters } = this.state;
        
        if (this.state.toDetail===true) {
            let id = this.state.selectedCharacter[0].id;
            console.log(id);
            return  <Router><Redirect to={{pathname:"/detail", search:"?id="+id, state:{id: 1}}} /></Router>
        }
         
        return (
            <div className="container">
                <h1>React Tutorial</h1>
                <p>Add a character with a name and a job to the table.</p>

                <AppRouter />                
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                    viewCharacter={this.viewCharacter}
                />                 
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default App;