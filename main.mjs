/**
 * My API Sandbox
 * 
 */

import { createUserHandler, getUsersHandler, getUserByUsernameHandler } from "users.mjs";

// A basic route returning a canned response
Sandbox.define('/person', 'GET', function(req, res){
    return res.json({
        "name": "Purnanga Borah",
        "company": "Accenture Inc"
    });
});

// Using stateful behaviour to simulate creating users
Sandbox.define('/person', 'POST', createUserHandler);

// Using stateful behaviour to simulate getting all users
Sandbox.define('/users', 'GET', getUsersHandler);

// Using named route parameters to simulate getting a specific user
Sandbox.define('/person/{id}', 'PUT', getUserByUsernameHandler);