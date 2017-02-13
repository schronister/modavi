// Include the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component for displaying individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
var Router = router.Router;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Reference the high-level components
var Main = require("../components/Main");
var ArticleList = require("../components/ArticleList")


// Export the Routes
const routes = (
    <Route path="/" component={Main}>
        <Route path="articles" component={ArticleList}/>
    </Route>
)

export default routes;
