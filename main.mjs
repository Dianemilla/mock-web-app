/**
 * My API Sandbox
 * 
 */

import { createUserHandler, getUsersHandler, getUserByUsernameHandler } from "users.mjs";

// A basic route returning a canned response
Sandbox.define('/persons', 'GET', function(req, res){
    return res.send(200, {
        "status": "200",
        "persons": 
            [{
                "id": 1,
                "name": "Purnanga Borah",
                "subscribed": true
            }]
        
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
    var id = req.query.id;
    
    
    if (id == "1") {
        res.send(200, {
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
    } else{
         res.send(400, {
            "status": "400",
            "message": "ID not existing"
        });}
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

