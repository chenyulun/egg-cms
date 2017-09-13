/**
 * Created by EX_WLJR_CHENYULUN on 2017/9/11.
 */
'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const UserSchema = new mongoose.Schema({
    userName: { type: String },
    password: { type: String },
  });

  return mongoose.model('User', UserSchema);
};
