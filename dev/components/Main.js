// Include React
var React = require("react");
var Sidebar = require('react-sidebar').default;
import { Link } from 'react-router';
import categories from './sidebarcontent';


class Main extends React.Component {
    constructor(props) {
    super(props);
    this.state = { docked: false,
      open: false,
      transitions: true,
      currentUser:""
    };

    this.setUser = this.setUser.bind(this);
    }

    toggleSidebarDock() {
        this.setState({open: !this.state.open, docked: !this.state.docked});
    }

    componentWillMount(){
        var mql = window.matchMedia('(min-width: 993px)');
        mql.addListener(this.mediaQueryChanged.bind(this));
        this.setState({mql: mql, docked:mql.matches, open:mql.matches});
        $( document ).ready(function(){
            $(".button-collapse").sideNav({'closeOnClick': true});

        })


    }

    componentWillUnmount(){
        this.state.mql.removeListener(this.mediaQueryChanged);
    }

    mediaQueryChanged() {
    this.setState({docked: this.state.mql.matches});
    this.setState({open: this.state.docked});
    }

    setUser(username){
        this.setState({currentUser:username});
    }



    render(){
        const sidebarContent = 
            <div className="categories">
                <h5>Categories</h5>
                <ul>{categories.map(function(item){
                    return (
                        <li key={item}>{item}</li>
                    )
                    })}
                </ul>
            </div>;
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
                
                <nav className="navbar">
                    <div className="nav-wrapper  deep-purple darken-4">

                        <Link to="/" id="logo" className="brand-logo">ModaVi</Link>
                        <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to="/articles">Latest Articles</Link></li>
                            <li><Link to="/submit">Submit Content</Link></li>
                            {this.state.currentUser==="" ? <li><Link to="/login">Register/Login</Link></li> : <li><Link to="/">{this.state.currentUser}</Link></li>}
                        </ul>
                        <ul className="side-nav" id="mobile-demo">
                            <li><Link to="/categories">Browse Categories</Link></li>
                            <li><Link to="/articles">Latest Articles</Link></li>
                            <li><Link to="/submit">Submit Content</Link></li>
                            <li><Link to="/login">Register/Login</Link></li>
                        </ul>
                    </div>
                  </nav>
                <div className="mainContent container">
                 {this.props.children && React.cloneElement(this.props.children, {currentUser:this.state.currentUser, setUser:this.setUser})}
                </div>
                </Sidebar>
                
            </div>

            //<a href="#" onClick={this.toggleSidebarDock.bind(this)}>{openStatus?<i className="material-icons">skip_previous</i>:<i className="material-icons">toc</i>}</a>
        )
    }
}

// Export the component back for use in other files
module.exports = Main;