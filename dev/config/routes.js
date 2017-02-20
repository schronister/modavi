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
var ArticleList = require("../components/ArticleList");
var Login = require("../components/Login");
var Submit = require("../components/Submit");
var Categories = require("../components/Categories");
var Dashboard = require("../components/Dashboard");


// Export the Routes
const routes = (
    <Route path="/" component={Main}>
        <IndexRoute component={Dashboard}/>
        <Route path="articles" component={ArticleList}/>
        <Route path="submit" component={Submit}/>
        <Route path="categories" component={Categories}/>
        <Route path="login" component={Login}/>
    </Route>
)

export default routes;
