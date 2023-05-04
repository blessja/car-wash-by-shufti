const models = require('./models');
const Carwash = require('./models/carwashModel')
describe('Models', () => {
  test('should export all models', () => {
    expect(models).toHaveProperty('User');
    expect(models).toHaveProperty('CarWash');
    expect(models).toHaveProperty('Staff');
  });
});

