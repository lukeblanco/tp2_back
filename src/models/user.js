import pkg from 'mongoose';
const { Schema, model } = pkg;

export const UserSchema = new Schema({
 userName: String,
 password: String,
});
  
export default model("user", UserSchema);
