/* eslint-disable func-names */
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre('save', async function(next) {
  const hash = await bcrypt.hash(this.password, 8);
  this.password = hash;

  next();
});

export default mongoose.model('User', UserSchema);
