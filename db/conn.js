const mongoose = require('mongoose');
const DB = 'mongodb+srv://vishal7859:Vishal4691@cluster0.cnpdj.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(DB, {

}).then(() => {
    console.log("connection sucessful")
}).catch((err) => {
    console.log(err)
});
