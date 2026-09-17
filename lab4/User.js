/**
 * User.js
 * ------------------------------------------------------------------
 * MODULE 3: Mongoose schema/model for a registered user.
 *
 * The password field stores a BCRYPT HASH, never plain text — hashing
 * happens in authController.js before a user is saved.
 * ------------------------------------------------------------------
 */

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true, // prevents two users from sharing the same email at the DB level
    lowercase: true,
    trim: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters'] // enforced on the pre-hash value in the controller
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);
