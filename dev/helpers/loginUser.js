var axios = require("axios");
var querystring = require("querystring");


export default function loginUser(username, password){
    return axios.post("/api/login", querystring.stringify({username:username, password:password}))
    .then(function(response) {
        console.log("User logged in.")
        return response;
    })
    .catch(function(err){
        console.log("Incorrect credentials supplied");
        return false;
    });
}