import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import AppRouter from './AppRouter';

class App extends Component {
    state = {
        characters: []
    };

    viewCharacter = index => {
        const { characters } = this.state;
    
       /*this.setState({
            characters: characters.filter((character, i) => { 
                return i === index;
            })
        });*/       
        const x = {
            characters: characters.filter((character, i) => { 
                return i === index;
            })
        };
        console.log(x);
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