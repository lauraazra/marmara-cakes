const mongoose = require("mongoose");

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    console.log("Pakai koneksi DB yang sudah ada, Bre!");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "marmara-cakes",
    });

    isConnected = db.connections[0].readyState;
    console.log("Database Marmara Cakes sudah nyambung, Bre!");
  } catch (err) {
    console.error("Gagal nyambung ke DB:", err.message);
    throw err;
  }
};

module.exports = connectDB;
