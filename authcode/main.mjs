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
    res.send(200, '[{\
        "id": 1,\
        "isActive": true,\
        "age": 22,\
        "name": "Larson Hawkins",\
        "company": "TROPOLIS",\
        "email": "larsonhawkins@tropolis.com",\
        "phone": "+1 (875) 487-2436",\
        "address": "275 Kossuth Place, Cherokee, Louisiana, 3409",\
        "registered": "2021-03-12T06:52:28 +06:00",\
        "socialSecurityNumber": "0efeed9b-3df2-4bb7-b22a-255939a6d55d"\
    }, {\
        "id": 2,\
        "isActive": false,\
        "age": 32,\
        "name": "Lowery Nash",\
        "company": "ELENTRIX",\
        "email": "lowerynash@elentrix.com",\
        "phone": "+1 (947) 429-2419",\
        "address": "176 Vine Street, Orovada, Texas, 3862",\
        "registered": "2018-08-02T05:57:30 +05:00",\
        "socialSecurityNumber": "82a2410b-6ebc-4771-8750-7539621f9a09"\
    }, {\
        "id": 3,\
        "isActive": false,\
        "age": 23,\
        "name": "Marquita Welch",\
        "company": "STREZZO",\
        "email": "marquitawelch@strezzo.com",\
        "phone": "+1 (948) 419-3518",\
        "address": "415 Meadow Street, Homeland, Arkansas, 2381",\
        "registered": "2016-12-03T04:02:35 +06:00",\
        "socialSecurityNumber": "f39abcd4-b770-48ee-b7a9-8a05ca045627"\
    }, {\
        "id": 4,\
        "isActive": false,\
        "age": 22,\
        "name": "Randi Jenkins",\
        "company": "BUZZOPIA",\
        "email": "randijenkins@buzzopia.com",\
        "phone": "+1 (855) 493-3179",\
        "address": "993 Broome Street, Bendon, Arizona, 3801",\
        "registered": "2020-04-12T09:43:19 +05:00",\
        "socialSecurityNumber": "53184510-2891-4391-9beb-8dfb262ab550"\
    }, {\
        "id": 5,\
        "isActive": true,\
        "age": 36,\
        "name": "Lula Cooley",\
        "company": "SUPPORTAL",\
        "email": "lulacooley@supportal.com",\
        "phone": "+1 (942) 578-3630",\
        "address": "529 Everett Avenue, Fairacres, Kansas, 5160",\
        "registered": "2019-08-22T10:58:24 +05:00",\
        "socialSecurityNumber": "1b2221e7-8d54-4796-bf82-9dd64a843f6d"\
    }, {\
        "id": 6,\
        "isActive": true,\
        "age": 22,\
        "name": "Frazier Ewing",\
        "company": "SEQUITUR",\
        "email": "frazierewing@sequitur.com",\
        "phone": "+1 (836) 524-3689",\
        "address": "552 Lott Street, Bentley, Puerto Rico, 5274",\
        "registered": "2018-10-16T09:56:19 +05:00",\
        "socialSecurityNumber": "aa96e59f-2591-4c4e-9e06-291ad657e35f"\
    }]');
})