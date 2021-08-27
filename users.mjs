export const createUserHandler = function(req, res){
    return res.json(
        {
        "status": "201",
        "message": "Created"
        }
    );
}

export const getUsersHandler = function(req, res){
    // route param {username} is available on req.params
    try {
        var id = req.params.id;
        if (id == 1) {
            return res.json({
                "status": "200",
                "message": "Person successfully deleted"
            });
        } else
            throw "meh";
    } catch (e) {
        res.status(400);
        return res.json({
            "status": "400",
            "message": "Invalid ID"
        });
    }
}

export const getUserByUsernameHandler = function(req, res){
    // route param {username} is available on req.params
    try {
        var id = req.params.id;
        res.send(id);
        if (id == 1) {
            return res.json({
                "status": "200",
                "message": "Details successfully updated"
            });
        } else
            throw "meh";
    } catch (e) {
        res.send(400, {
            "status": "400",
            "message": "Invalid ID"
        });
        //return res.json();
    }
}