// Include React
var React = require("react");
import loginUser from "../helpers/loginUser";
import { browserHistory } from 'react-router';


export default class LoginForm extends React.Component{
    constructor(props) {
    super(props);
    this.state={username:"", password:"", loginUser:"", error:false}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        var newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState({loginUser:this.state.username})
        


    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.loginUser != this.state.loginUser){
            loginUser(this.state.username, this.state.password).then(function(data){
            if (data){
                this.setState({error:false});
                this.props.setUser(this.state.username);
                browserHistory.push('/');
            } else{
                this.setState({loginUser:"", error:true});
            }
            }.bind(this));
        }
    }


    render(){

        return(
        <div>
        <form className="col s12 submitFormContainer" onSubmit={this.handleSubmit.bind(this)}>
            <div className="row">
                <div className="input-field col s12">
                    <input onChange={this.handleChange.bind(this)} id="username" type="text"></input>
                    <label htmlFor="username">Username</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input onChange={this.handleChange.bind(this)} id="password" type="password"></input>
                    <label htmlFor="password">Password</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input className="submitForm" type="submit" value="Submit"/>
                </div>
            </div>
        </form>
        {this.state.error &&

        <div className="row">
            <div className="col s12 loginError">
            <p>Sorry, that username/password combination doesn't match our records. Please try again.</p>
            </div>
        </div>

        }

        </div>
        )
    }
}
