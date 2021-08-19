export const createUserHandler = function(req, res){
    return res.json(
        {
        "status": "201",
        "message": "Created"
        }
    );
}

export const getUsersHandler = (req, res) => {
    // retrieve users or, if there are none init, to empty array
    state.users = state.users || [];

    return res.json(state.users);
}

export const getUserByUsernameHandler = function(req, res){
    // route param {username} is available on req.params
    try {
        var id = req.params.id;
        if (id==1){
            return res.json({
            "status": "200",
            "message": "Details successfully updated"
        });
        }
        else
            throw "meh";
    } catch (e) {
        return res.json({
            "status": "400",
            "message": "Invalid ID"
        });
    }
}