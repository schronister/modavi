// Include React
var React = require("react");
import { Link } from 'react-router';

class Main extends React.Component {
    render(){
        return(
            <div>
                <h1>Main cadaaadadaomponent</h1>
                <h2>Hello</h2>
                <Link to="/articles">Go to articles</Link>

                {this.props.children}
            </div>
        )
    }
}

// Export the component back for use in other files
module.exports = Main;