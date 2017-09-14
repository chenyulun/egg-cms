'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      console.log(this.ctx.request);
      console.log(this.ctx.query);
      this.ctx.body = 'hi, egg' + app.config.env;
    }
  }
  return HomeController;
};
