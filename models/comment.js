var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({
    text: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User" //refers to the model we're going to refer to with this object id
        },
        username: String
    }
});
module.exports = mongoose.model("Comment", commentSchema);

/*{
    username: "Potato"
    _id: 1234,
    hash: 129038923758iefnsdfvniuewh
    salt:
}*/