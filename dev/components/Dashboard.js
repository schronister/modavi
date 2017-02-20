// Include React
var React = require("react");

class Dashboard extends React.Component {
    render(){
        return(
            <div>
                <h3>Dashboard {this.props.currentUser !== "" && "for " + this.props.currentUser}</h3>

            </div>
        )
    }
}

// Export the component back for use in other files
module.exports = Dashboard;