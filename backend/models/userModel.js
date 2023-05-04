const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  car: { type: String },
  washHistory: [{ type: Schema.Types.ObjectId, ref: 'WashHistory' }],
  carwash: { type: Schema.Types.ObjectId, ref: 'Carwash',  required: true, index: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
