const mongoose = require("mongoose");
const User = require("./models/userModel");


describe('User model test', () => {
  it('can create a new user', async () => {
    const userData = {
      name: 'John Doe',
      email: 'john.doe@test.com',
      password: 'password123'
    };

    const user = new User(userData);
    const savedUser = await user.save();

    expect(savedUser._id).toBeDefined();
    expect(savedUser.name).toBe(userData.name);
    expect(savedUser.email).toBe(userData.email);
  },  150000);
});