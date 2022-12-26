const mongoose  = require('mongoose');

const Post =  mongoose.Schema(
    {
        title : {
            required:true,
            type:String
        },

        description:{
            required:true,
            type:String
        },
        
        Rejectedfeedback : {
            default:"",
            type:String
        },
        
        IsRejected : {
            default:false
        },

        createdBy : {
            required:true,
            type:String
        },

        IsAdminApproved:{
            default:false,
            type:Boolean
        },

        createdDate :{
            type:Date
        }
    }
)
const PostModal = mongoose.model("Post", Post);
module.exports = PostModal;