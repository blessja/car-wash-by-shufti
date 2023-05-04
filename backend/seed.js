const mongoose = require('mongoose');
const CarWash = require('./models/carwashModel');
const User = require('./models/userModel');
const WashHistory = require('./models/washHistoryModel');

mongoose.connect('mongodb+srv://admin-Jackson:jaydenjackson1@cluster0.bnu3c.mongodb.net/carwash?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to database');
  })
  .catch((error) => {
    console.log('Connection failed: ' + error.message);
  });

// Create initial data
const carWashData = [
  {
    name: 'Sparkle Car Wash',
    location: '123 Main St',
    users: [],
    staff: [],
  },
  {
    name: 'Clean Machine Car Wash',
    location: '456 Oak Ave',
    users: [],
    staff: [],
  },
];

const userData = [
  {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "password": "password123",
    "car": "Toyota Corolla",
    "washHistory": [],
    "carWash": "611fc41e7fcf5102fc8a7f90"
  }
  ,
  {
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    password: 'password456',
    car: 'Honda Civic',
    washHistory: [],
    carWash: '',
  },
];

const washHistoryData = [
  {
    user: '',
    carWash: '',
    date: new Date(),
    price: 10.0,
  },
];

async function seed() {
  // Clear existing data
  await CarWash.deleteMany({});
  await User.deleteMany({});
  await WashHistory.deleteMany({});

  // Add new data
  const carWashes = await CarWash.insertMany(carWashData);
  const users = await User.insertMany(userData);

  // Associate users with car washes
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const carWash = carWashes[Math.floor(Math.random() * carWashes.length)];
    user.carWash = carWash._id;
    await user.save();
    carWash.users.push(user._id);
    await carWash.save();
  }

  // Associate wash histories with users and car washes
  for (let i = 0; i < washHistoryData.length; i++) {
    const washHistory = washHistoryData[i];
    const user = users[Math.floor(Math.random() * users.length)];
    const carWash = carWashes[Math.floor(Math.random() * carWashes.length)];
    washHistory.user = user._id;
    washHistory.carWash = carWash._id;
    await WashHistory.create(washHistory);
    user.washHistory.push(washHistory._id);
    await user.save();
    carWash.staff.push(user._id);
    await carWash.save();
  }

  console.log('Database seeded!');
}

seed()
  .then(() => {
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error(err);
    mongoose.connection.close();
  });
