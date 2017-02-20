// Include React
var React = require("react");
import createUser from "../helpers/createUser";

export default class CreateAccountForm extends React.Component{
    constructor(props) {
    super(props);
    this.state={name:"", username:"", password:""}
    }

    handleChange(event){
        var newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    }

    handleSubmit(event){
        console.log('submitting user');
        createUser(this.state.name, this.state.username, this.state.password)
        .then(function(){
            this.props.setUser(this.state.username);
        }.bind(this))
        event.preventDefault();

    }

    render(){

        return(
        <div>
        <form className="col s12 submitFormContainer" onSubmit={this.handleSubmit.bind(this)}>
            <div className="row">
                <div className="input-field col s12">
                    <input onChange={this.handleChange.bind(this)} id="name" type="text"></input>
                    <label htmlFor="name">Name</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input onChange={this.handleChange.bind(this)} id="username" type="text"></input>
                    <label htmlFor="username">Pick a Username</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input onChange={this.handleChange.bind(this)} id="password" type="password"></input>
                    <label htmlFor="password">Enter a password</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input className="submitForm" type="submit" value="Submit"/>
                </div>
            </div>
        </form>
        </div>
        )
    }
}
