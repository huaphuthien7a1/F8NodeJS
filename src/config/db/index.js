// Using Node.js `require()`
const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/f8_nodejs_dev', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('connected to mongodb successfully');
  } catch (error) {
    console.log('connected to mongodb failed');
  }
}

module.exports = { connect };
