/**
 * Created by EX_WLJR_CHENYULUN on 2017/9/11.
 */
'use strict';

module.exports = app => {
  class UserController extends app.Controller {
    * index() {
      this.ctx.body = yield this.ctx.model.User.find({}); // you should use upper case to access mongoose model;
    }
    * authenticate() {
      this.ctx.body = 'ok';
    }
  }
  return UserController;
};
