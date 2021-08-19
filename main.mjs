/**
 * My API Sandbox
 * 
 */

import { createUserHandler, getUsersHandler, getUserByUsernameHandler } from "users.mjs";

// A basic route returning a canned response
Sandbox.define('/persons', 'GET', function(req, res){
    return res.json({
        "status": "200",
        "persons": [
        [
          {
            "id": 1,
            "name": "Purnanga Borah",
            "subscribed": true
          }
        ]
      ]});
});

// Using stateful behaviour to simulate creating users
Sandbox.define('/persons', 'POST', createUserHandler);

// Using stateful behaviour to simulate getting all users
Sandbox.define('/person/{id}', 'DELETE', getUsersHandler);

// Using named route parameters to simulate getting a specific user
Sandbox.define('/person/{id}', 'PUT', getUserByUsernameHandler);