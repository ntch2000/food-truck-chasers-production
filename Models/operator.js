const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const operatorSchema = new Schema({
  username: { type: String, required: true, unique:true,  trim: true },
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  trucks: { type: Array, required: false },
  phone: {
    type: Number,
    required: true,
    validate: {
      validator: function (v) {
        return /\d{3}-\d{3}-\d{4}/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
});

const Operator = mongoose.model("Operator", operatorSchema);

module.exports = Operator;
