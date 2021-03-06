import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            id: 0,
            name: '',
            job: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.setState({id: this.state.id + 1}, () => {
            this.props.handleSubmit(this.state);
            this.initialState.id = this.state.id;
            this.setState(this.initialState); 
        });                               
    }

    render() {
        const { name, job } = this.state; 

        return (
            <div>
            <form onSubmit={this.onFormSubmit}>
                <label>Name</label>
                <input 
                    type="text" 
                    name="name" 
                    value={name} 
                    onChange={this.handleChange} />
                <label>Job</label>
                <input 
                    type="text" 
                    name="job" 
                    value={job} 
                    onChange={this.handleChange} />
                <button type="submit">
                    Submit
                </button>
            </form>
            </div>
        );
    }
}

export default Form;