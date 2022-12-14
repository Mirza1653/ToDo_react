const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = Schema({
    text : {
        type:String,
        required : true
    }, 
    complete: {
        type: Boolean,
        default : false
    }, 
    timestamp: {
        type:String,
        drfault : Date.now()
    }
})

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
