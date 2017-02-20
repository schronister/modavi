// Include React
var React = require("react");
import submit from "../helpers/submit";

class Submit extends React.Component {
    constructor(props) {
    super(props);

    this.state= {category:"Choose a category",
                articleContent:"",
                quiz:[]}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({category: event.target.value});
    }

    handleSubmit(event){
        console.log("submitted.");
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <h4>Submit an article</h4>
                <p>Help us grow our content</p>
                <div className="row">
                    <form className="col s12 submitFormContainer" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col s12">
                            <select className="submitForm browser-default" value = {this.state.category} onChange={this.handleChange}>
                              <option value="">Choose a category</option>
                              <option value="science">Science</option>
                              <option value="literature">Literature</option>
                              <option value="technology">Technology</option>
                              <option value="math">Math</option>
                              <option value="SPACEPANTS">SPACEPANTS</option>
                            </select>
                            
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                            <input className="submitForm" type="submit" value="Submit"/>
                            </div>
                        </div>

                    </form>

                </div>
            </div>
        )
    }
}

// Export the component back for use in other files
module.exports = Submit;