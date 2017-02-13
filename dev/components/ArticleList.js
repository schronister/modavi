// Include React
var React = require("react");

class ArticleList extends React.Component {
    render(){
        return(
            <div>
                <h1>Child Component</h1>

            </div>
        )
    }
}

// Export the component back for use in other files
module.exports = ArticleList;