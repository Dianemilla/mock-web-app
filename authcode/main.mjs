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
    var id = req.query.id;
    
    
    if (id == "1") {
        res.send(200, {
            "status": "200",
            "message": "Details listed",
            "persons": [{
                "id": 1,
                "name": "Purnanga Borah",
                "subscribed": true
            }]
        });
    } else {
        res.send(400, {
            "status": "400",
            "message": "ID not existing"
        });
    }
});

Sandbox.define('/dev/persons', 'GET', function(req, res){
    var id = req.query.id;
    
    
    if (id == "1") {
        res.send(200, {
            "status": "200",
            "message": "Details listed",
            "persons": [{
                "id": 1,
                "name": "Purnanga Borah",
                "subscribed": true
            }]
        });
    } else {
        res.send(400, {
            "status": "400",
            "message": "ID not existing"
        });
    }
});
Sandbox.define('/qa/persons', 'GET', function(req, res){
    var id = req.query.id;
    
    
    if (id == "1") {
        res.send(200, {
            "status": "200",
            "message": "Details listed",
            "persons": [{
                "id": 1,
                "name": "Purnanga Borah",
                "subscribed": true
            }]
        });
    } else {
        res.send(400, {
            "status": "400",
            "message": "ID not existing"
        });
    }
});
Sandbox.define('/int/persons', 'GET', function(req, res){
    var id = req.query.id;
    
    
    if (id == "1") {
        res.send(200, {
            "status": "200",
            "message": "Details listed",
            "persons": [{
                "id": 1,
                "name": "Purnanga Borah",
                "subscribed": true
            }]
        });
    } else {
        res.send(400, {
            "status": "400",
            "message": "ID not existing"
        });
    }
});
Sandbox.define('/test/persons', 'GET', function(req, res){
    var id = req.query.id;
    
    
    if (id == "1") {
        res.send(200, {
            "status": "200",
            "message": "Details listed",
            "persons": 
                [{
                    "id": 1,
                    "name": "Purnanga Borah",
                    "subscribed": true
                }]
            });
    } else {
        res.send(400, {
            "status": "400",
            "message": "ID not existing"
        });
    }
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



// Using stateful behaviour to simulate creating users
Sandbox.define('/dev/persons', 'POST', createUserHandler);

// Using stateful behaviour to simulate getting all users
Sandbox.define('/dev/persons/{id}', 'DELETE', getUsersHandler);

// Using named route parameters to simulate getting a specific user
Sandbox.define('/dev/persons/{id}', 'PUT', getUserByUsernameHandler);



// Using stateful behaviour to simulate creating users
Sandbox.define('/qa/persons', 'POST', createUserHandler);

// Using stateful behaviour to simulate getting all users
Sandbox.define('/qa/persons/{id}', 'DELETE', getUsersHandler);

// Using named route parameters to simulate getting a specific user
Sandbox.define('/qa/persons/{id}', 'PUT', getUserByUsernameHandler);



// Using stateful behaviour to simulate creating users
Sandbox.define('/int/persons', 'POST', createUserHandler);

// Using stateful behaviour to simulate getting all users
Sandbox.define('/int/persons/{id}', 'DELETE', getUsersHandler);

// Using named route parameters to simulate getting a specific user
Sandbox.define('/int/persons/{id}', 'PUT', getUserByUsernameHandler);




Sandbox.define('/login','GET', function(req, res){
    res.type('text/html');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    //res.render('get');
    res.send('<html>\
    <head>\
    <title>Sample Login Page for User Consent</title>\
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">\
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">\
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>\
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>\
    </head>\
    \
    <body>\
    <div id="login">\
    <h3 class="text-center text-white pt-5">Login form</h3>\
    <div class="container">\
    <div id="login-row" class="row justify-content-center align-items-center">\
    <div id="login-column" class="col-md-6">\
    <div id="login-box" class="col-md-12">\
    <form id="login-form" class="form" action="https://apisamplebackend.getsandbox.com/submit" method="get">\
    <input type="hidden" name="client_id" value="' + req.query.client_id + '" />\
    <input type="hidden" name="response_type" value="' + req.query.response_type + '" />\
    <input type="hidden" name="scope" value="' + req.query.scope + '" />\
    <h3 class="text-center text-info">Login</h3>\
    <div class="form-group">\
    <label for="username" class="text-info">Username:</label><br>\
    <input type="text" name="userId" id="username" class="form-control" required>\
    </div>\
    <div class="form-group">\
    <label for="password" class="text-info">Password:</label><br>\
    <input type="password" name="password" id="password" class="form-control" required>\
    </div>\
    <div class="form-group">\
    <input type="submit" name="submit" class="btn btn-info btn-md" value="submit">\
    </div>\
    </form>\
    </div>\
    </div>\
    </div>\
    </div>\
    </div>\
    </body>\
    </html>');
})

Sandbox.define('/apikey','GET', function(req, res){
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    console.log("asdasd" + faker.name.findName());
    res.send({
        "status": "Ok",
        "message": "Successfully authenticated"
    });
    
    
})

Sandbox.define('/submit', 'GET', function(req, res){
    var userId = req.query.userId;
    var password = req.query.password;
    
    
    if (userId == "admin" && password == "1234") {
        res.status(200);
        //Display consent page
    
        res.type('text/html');
        res.send('<html>\
    <head>\
    <title>Sample Login Page for User Consent</title>\
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">\
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">\
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>\
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>\
    </head>\
    \
    <body>\
    <div id="login">\
    <h3 class="text-center text-white pt-5">Sample Proxy App</h3>\
    <div class="container">\
    <div id="login-row" class="row justify-content-center align-items-center">\
    <div id="login-column" class="col-md-6">\
    <div id="login-box" class="col-md-12">\
    <form id="login-form" class="form" action="https://sdge-dev.apigee.net/oauth/authorizationcode" method="get">\
    <input type="hidden" name="client_id" value="' + req.query.client_id + '" />\
    <input type="hidden" name="response_type" value="' + req.query.response_type + '" />\
    <input type="hidden" name="scope" value="' + req.query.scope + '" />\
    <h3 class="text-center text-info">Allow access to Sample Persons App?</h3>\
    <div class="form-group">\
    <input type="submit" name="Allow" class="btn btn-info btn-md" value="Allow">\
    <input type="button" name="Deny" class="btn btn-info btn-md" value="Deny">\
    </div>\
    </form>\
    </div>\
    </div>\
    </div>\
    </div>\
    </div>\
    </body>\
    </html>');
    } else {
    
        res.send("no param");
    }
    
    
    
    // Set the status code of the response.
    
    // Send the response body.
    //res.render('get');
})

Sandbox.define('/callback/token','GET', function(req, res) {
    // Check the request, make sure it is a compatible type
    if (!req.is('application/json')) {
        return res.send(400, 'Invalid content type, expected application/json');
    }
    
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "status": "ok"
    });
})

Sandbox.define('/data-masking','GET', function(req, res){
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.send(200, JSON.stringify(
        [{
            "id": 0,
            "isActive": true,
            "age": 34,
            "name": "Wendi Rodriguez",
            "company": "RADIANTIX",
            "email": "wendirodriguez@radiantix.com",
            "phone": "+1 (856) 438-2448",
            "address": "982 Nevins Street, Reno, Iowa, 6685",
            "registered": "2015-01-15T03:41:09 +06:00",
            "socialSecurityNumber": "0c116859-5992-45b6-8f87-2bc7cfe5500d"
        }, {
            "id": 1,
            "isActive": true,
            "age": 39,
            "name": "Rosetta Alvarez",
            "company": "WEBIOTIC",
            "email": "rosettaalvarez@webiotic.com",
            "phone": "+1 (841) 541-3856",
            "address": "259 Pineapple Street, Manchester, Alabama, 2440",
            "registered": "2015-07-26T01:16:25 +05:00",
            "socialSecurityNumber": "7607b9e8-b109-4c85-ba3e-761c7db3502b"
        }, {
            "id": 2,
            "isActive": false,
            "age": 39,
            "name": "Rosalyn Wallace",
            "company": "EXTRAWEAR",
            "email": "rosalynwallace@extrawear.com",
            "phone": "+1 (934) 469-2003",
            "address": "336 Maple Avenue, Eggertsville, Missouri, 9359",
            "registered": "2019-07-30T11:50:35 +05:00",
            "socialSecurityNumber": "3887b546-2817-4395-a26a-ac1352535c42"
        }, {
            "id": 3,
            "isActive": true,
            "age": 36,
            "name": "Dunn Deleon",
            "company": "SENSATE",
            "email": "dunndeleon@sensate.com",
            "phone": "+1 (807) 465-2387",
            "address": "186 Aitken Place, Trinway, Ohio, 3355",
            "registered": "2015-09-13T08:48:24 +05:00",
            "socialSecurityNumber": "87de94e1-a3bc-458b-94f3-9707eeebecd9"
        }, {
            "id": 4,
            "isActive": true,
            "age": 26,
            "name": "Eva Byers",
            "company": "FIBEROX",
            "email": "evabyers@fiberox.com",
            "phone": "+1 (916) 431-2259",
            "address": "848 Johnson Street, Greensburg, Connecticut, 5080",
            "registered": "2018-10-16T01:33:31 +05:00",
            "socialSecurityNumber": "5ddaa1ab-63ec-4844-a06e-28d2226c2679"
        }, {
            "id": 5,
            "isActive": false,
            "age": 40,
            "name": "Sandoval Mason",
            "company": "FUELWORKS",
            "email": "sandovalmason@fuelworks.com",
            "phone": "+1 (950) 490-3129",
            "address": "987 Howard Place, Vienna, Indiana, 6276",
            "registered": "2021-08-08T02:11:24 +05:00",
            "socialSecurityNumber": "1909124a-b638-4544-84ce-b9e09b52486f"
        }, {
            "id": 6,
            "isActive": false,
            "age": 35,
            "name": "Adrienne Guerrero",
            "company": "TETAK",
            "email": "adrienneguerrero@tetak.com",
            "phone": "+1 (865) 526-3043",
            "address": "161 Branton Street, Lowgap, Puerto Rico, 7705",
            "registered": "2020-03-21T12:08:16 +05:00",
            "socialSecurityNumber": "9bc76ea5-d4b6-4a42-a20e-c4ac6126e87c"
        }
    ], undefined, 4));
})