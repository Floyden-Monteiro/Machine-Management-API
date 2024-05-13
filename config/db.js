import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
  try {
    const DB = process.env.MONGODB_URI;

    const connectionInstance = await mongoose.connect(DB);

    console.log(
      `\n Mongodb connected DB NAME: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log('Mongodb connection error', error);
    process.exit(1);
  }
};

export default connectDB;
