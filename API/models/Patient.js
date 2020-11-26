import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PatientSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  owner: {
    type: String,
    trim: true,
  },
  phoneNumber: {
    type: String,
    trim: true,
  },
  date: {
    type: String,
    trim: true,
  },
  hour: {
    type: String,
    trim: true,
  },
  symptoms: {
    type: String,
    trim: true,
  },
});
const Patient = mongoose.model("Patient", PatientSchema);
export default Patient;
