/**
 * Created by EX_WLJR_CHENYULUN on 2017/9/11.
 */
'use strict';
exports.index = function* (ctx) {
  ctx.body = yield ctx.model.User.find({}); // you should use upper case to access mongoose model
}
