import mongoose from "mongoose";
const { Schema } = mongoose; // struktur um die Organisation der Daten zu definieren

const signSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  element: {
    type: String,
    required: true,
  },
  rulingPlanet: {
    type: String,
    required: true,
  },
  symbol: {
    type: String,
    required: true,
  },
  compatibility: {
    type: [String],
    required: true,
  },
  luckyNumbers: {
    type: [Number],
    required: true,
  },
  luckyColor: {
    type: String,
    required: true,
  },
  luckyDay: {
    type: String,
    required: true,
  },
  strenghts: {
    type: [String],
    required: true,
  },
  weaknesses: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
const Sign = mongoose.models.Sign || mongoose.model("Sign", signSchema);
export default Sign;
