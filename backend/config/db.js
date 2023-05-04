const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://admin-Jackson:jaydenjackson1@cluster0.bnu3c.mongodb.net/mearn?retryWrites=true&w=majority', {
     
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(`Error connecting to MongoDB ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB; 