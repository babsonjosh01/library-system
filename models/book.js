const mongoose  = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
        },

    Isbn: {
        type: String, 
        unique:true
        },

    authors: [{type: mongoose.Schema.Types.ObjectId, ref:"Author"}],

    status: {type:String,
        enum:["IN","OUT"],
        default: "IN"
    },

    borrowedBy: {
        type: mongoose.Schema.Types.ObjectId, ref: "Student", default : null},

    IssuedBy: {type: mongoose.Schema.Types.ObjectId, ref: "LibraryAttendant", default: null},

    returnDate: {type: Date, default:null},

    createdAt : {
        type: Date,
        default : Date.now
    }
},
{timestamps:true})

module.exports = mongoose.model("Book", bookSchema)