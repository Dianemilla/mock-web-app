/**
 * My API Sandbox
 * 
 */

import { createUserHandler, getUsersHandler, getUserByUsernameHandler } from "users.mjs";

// A basic route returning a canned response
Sandbox.define('/persons', 'GET', function(req, res){
    return res.json(
        {
      "persons": [
        [
          {
            "name": "persons/a353-x51d",
            "displayName": "ApiGuru84",
            "subscribed": true
          }
        ]
      ],
      "nextPageToken": "string"
    }
        );
});

// Using stateful behaviour to simulate creating users
Sandbox.define('/person', 'POST', createUserHandler);

// Using stateful behaviour to simulate getting all users
Sandbox.define('/person/{id}', 'DELETE', getUsersHandler);

// Using named route parameters to simulate getting a specific user
Sandbox.define('/person/{id}', 'PUT', getUserByUsernameHandler);