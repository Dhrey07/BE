const mongoose = require('mongoose');

const WaitlistSchema = mongoose.Schema({
    email: {
     type: String,
     required: true,
     index:true
    },
    first_name: {
        type:String,
        required:true,
        index:true
    },
    
}, {
    timestamps: true
});

module.exports = mongoose.model('Waitlist', WaitlistSchema);