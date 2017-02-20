// Include React
var React = require("react");
import CreateAccountForm from "./CreateAccountForm";
import LoginForm from "./LoginForm";

class Login extends React.Component {
    constructor(props) {
    super(props);
    this.state={mode:"login"};
    }

    changeMode(){
        if (this.state.mode === "create"){
            this.setState({mode:"login"});
        } else{
            this.setState({mode:"create"});
        }
        
    }

    render(){


        return(
            <div>
                {this.props.currentUser === "" && this.state.mode==="create" &&
                <div>
                <h4>Create an Account</h4>
                

                <CreateAccountForm setUser={this.props.setUser} />

                <p>Already have an account? Click <a href="#" onClick={this.changeMode.bind(this)}>here.</a></p>
                </div>
                }

                {this.props.currentUser === "" && this.state.mode==="login" &&
                <div>
                <h4> Log In </h4>
                <LoginForm setUser={this.props.setUser} />
                <p>Need an account? Click <a href="#" onClick={this.changeMode.bind(this)}>here.</a></p>
                </div>
                }

            </div>
        )
    }
}

// Export the component back for use in other files
module.exports = Login;