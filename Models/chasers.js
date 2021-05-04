const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chaserSchema = new Schema({
    username: { type: String, required: true, trim: true, unique: true},
    firstName:{ type: String, required: true, trim: true},
    lastName: {type:String, required: true, trim: true},
    password: {type:String, required: true, trim: true},
    email: {type:String, required: true, trim: true},
    chased: {type: Array, required: false}
});

const Chaser = mongoose.model("Chaser", chaserSchema);

module.exports = Chaser;

