const { Schema, model } = require('mongoose');
const argon2 = require('argon2');

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
});

userSchema.pre('save', async function (next) {
  try {
    this.password = await argon2.hash(this.password);
  } catch (err) {
    console.log(err);
  }
});

const User = model('User', userSchema);
module.exports = User;
