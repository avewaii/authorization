import React, {Component} from 'react';
// import Button from '@material-ui/core/Button';

export default class Ccomponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            visibility: false,
            count: 0,
            input: '',
            submit: '',
            items: []
        }

        this.handleClick = this.handleClick.bind(this);
        
        this.decrement = this.decrement.bind(this);
        this.increment = this.increment.bind(this);
        this.reset = this.reset.bind(this);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleClick() {
        this.setState(state => ({
            visibility: !state.visibility,
        }))
    }

    increment() {
        this.setState(state => ({
            count: state.count + 1,
        }))
    }

    decrement() {
        this.setState(state => ({
            count: state.count - 1,
        }))
    }

    reset() {
        this.setState(state => ({
            count: 0
        }))
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            input: this.state.input,
            items: [...this.state.items, this.state.input]
        })
    }
    

    render() {
        const styles = {
            color: 'yellow',
            backgroundColor: 'black'
        }
        
        
        if(this.state.visibility) {
            return (
                <div>
                    <h1>Class component state Nik</h1>
                    <button onClick={this.handleClick}>Click</button>
                

                    <h1>Current: {this.state.count}</h1>
                    <button onClick={this.increment}>Increment</button>
                    <button onClick={this.decrement}>Decrement</button>
                    <button onClick={this.reset}>Reset</button>

                
                
                </div>
            )
        } else {
            return (
                <div>
                    <h1 style={styles}>Class component state Van</h1>
                    {/* <button onClick={this.handleClick}>Click</button> */}

                    <ul>
                        {this.state.items.map((item, index) => (
                            <li>{item}</li>
                        ))}
                    </ul>



                    <form onSubmit={this.handleSubmit}>
                        <input value={this.state.input} onChange={this.handleChange}/>
                        <button type="submit">Submit</button>
                    </form>
                    
                    <h4>Controlled input:</h4>
                    <h3>input {this.state.input}</h3>
                    <h3>submit {this.state.submit}</h3>

                </div>
            )

        }
    
    }

} 