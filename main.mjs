/**
 * My API Sandbox
 * 
 */

import { createUserHandler, getUsersHandler, getUserByUsernameHandler } from "users.mjs";

// A basic route returning a canned response
Sandbox.define('/persons', 'GET', function(req, res){
    function timeFunction() {
                setTimeout(function(){ alert("After 5 seconds!"); }, 5000);
            }
    return res.json({
        "status": "200",
        "persons": [
            [{
                "id": 1,
                "name": "Purnanga Borah",
                "subscribed": true
            }]
        ]
    });
});
Sandbox.define('/prod/persons', 'GET', function(req, res){
    return res.json({
        "status": "200",
        "message": "Details listed",
        "persons": [
            [{
                "id": 1,
                "name": "Purnanga Borah",
                "subscribed": true
            }]
        ]
    });
});

Sandbox.define('/test/persons', 'GET', function(req, res){
    return res.json({
        "status": "200",
        "message" : "Details listed",
        "persons": [
            [{
                "id": 1,
                "name": "Purnanga Borah",
                "subscribed": true
            }]
        ]
    });
});
// Using stateful behaviour to simulate creating users
Sandbox.define('/persons', 'POST', createUserHandler);

// Using stateful behaviour to simulate getting all users
Sandbox.define('/persons/{id}', 'DELETE', getUsersHandler);

// Using named route parameters to simulate getting a specific user
Sandbox.define('/persons/{id}', 'PUT', getUserByUsernameHandler);


// Using stateful behaviour to simulate creating users
Sandbox.define('/test/persons', 'POST', createUserHandler);

// Using stateful behaviour to simulate getting all users
Sandbox.define('/test/persons/{id}', 'DELETE', getUsersHandler);

// Using named route parameters to simulate getting a specific user
Sandbox.define('/test/persons/{id}', 'PUT', getUserByUsernameHandler);


// Using stateful behaviour to simulate creating users
Sandbox.define('/prod/persons', 'POST', createUserHandler);

// Using stateful behaviour to simulate getting all users
Sandbox.define('/prod/persons/{id}', 'DELETE', getUsersHandler);

// Using named route parameters to simulate getting a specific user
Sandbox.define('/prod/persons/{id}', 'PUT', getUserByUsernameHandler);

