import mongoose from "mongoose";

const connectDB = () => {
  mongoose.Promise = global.Promise;
  mongoose.connect(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
};

export default connectDB;
