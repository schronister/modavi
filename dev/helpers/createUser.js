var axios = require("axios");
var querystring = require("querystring");


export default function createUser(name, username, password){
    return axios.post("/api/user", querystring.stringify({name: name, username:username, password:password}))
    .then(function(response) {
        console.log("Successfully created user.");
        console.log(response);
        return response;
    });
}