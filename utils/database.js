import mongoose from "mongoose";

let isConnected = false; // track the connection

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isconnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_RUI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,

    });
    isConnected = true
    console.log('MongoDB connected')
  } catch (error) {}
};
