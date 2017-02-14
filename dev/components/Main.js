// Include React
var React = require("react");
var Sidebar = require('react-sidebar').default;
import { Link } from 'react-router';

class Main extends React.Component {
    constructor(props) {
    super(props);
    this.state = { docked: false,
      open: false,
      transitions: true
    };
    }

    toggleSidebarDock() {
        this.setState({open: !this.state.open, docked: !this.state.docked});
    }

    
    componentWillUnmount(){
    
    }



    render(){
        const sidebarContent = <p>Hello sidebar</p>;
        const sidebarProps = {
          sidebar: sidebarContent,
          docked: this.state.docked,
          sidebarClassName: 'sidebarClass',
          open: this.state.open
        };

        const openStatus = this.state.open;

        return(
            <div>
                <Sidebar {...sidebarProps}>
                <div className ="mainContent">
                <h1>Main cadaaadadaomponent</h1>
                <h2>Hello</h2>
                <Link to="/articles">Go to articles</Link>
                <br/>
                <button href="#" onClick={this.toggleSidebarDock.bind(this)}>{openStatus?"Close Sidebar":"Open Sidebar"}</button>

                {this.props.children}
                </div>
                </Sidebar>
                
            </div>
        )
    }
}

// Export the component back for use in other files
module.exports = Main;