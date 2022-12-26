const mongoose  = require('mongoose')

const Comment = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    createdBy : {
        required:true,
        type:String
    },
    postId : {
        required:true,
        type:String
    }
})

module.exports = mongoose.model("Comment",Comment);