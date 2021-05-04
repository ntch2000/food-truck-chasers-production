const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const truckSchema = new Schema({
  truckName: { type: String, required: true, unique: true },
  location: { type: String, required: false },
  Menu: { type: Array, required: false },
  promoMessage: { type: String, required: false}
  accountType: { type: String, default: "basic"}
});

const Truck = mongoose.model("Truck", truckSchema);

module.exports = Truck;
