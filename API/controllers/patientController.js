import Patient from "../models/Patient.js";
// add new patient
const addNewPatient = async (req, res, next) => {
  const patient = new Patient(req.body);
  try {
    await patient.save();
    res.json({ msg: "Patient added successfully!" });
  } catch (error) {
    console.log(error);
    next();
  }
};

const getPatients = async (req, res, next) => {
  try {
    const patients = await Patient.find({});
    res.json(patients);
  } catch (error) {
    console.log(error);
    next();
  }
};

const getPatient = async (req, res, next) => {
  const id = req.params.id;
  try {
    const patient = await Patient.findById(id);
    res.json(patient);
  } catch (error) {
    console.log(error);
    next();
  }
};

const updatePatient = async (req, res, next) => {
  const id = req.params.id;
  try {
    const patient = await Patient.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.json(patient);
  } catch (error) {
    console.log(error);
    next();
  }
};

const deletePatient = async (req, res, next) => {
  const id = req.params.id;
  try {
    await Patient.findByIdAndDelete({ _id: id });
    res.json({ msg: "Patient deleted successfully!" });
  } catch (error) {
    console.log(error);
    next();
  }
};

export { addNewPatient, getPatients, getPatient, updatePatient, deletePatient };
