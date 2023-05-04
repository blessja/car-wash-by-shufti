const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const washHistorySchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  carWash: { type: Schema.Types.ObjectId, ref: "CarWash", required: true },
  date: { type: Date, default: Date.now },
  washDate: { type: Date, default: Date.now, required: true },
  washCount: {
    type: Number,
    default: 0,
  },
});

const WashHistory = mongoose.model("WashHistory", washHistorySchema);

module.exports = WashHistory;
