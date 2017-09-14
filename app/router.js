'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/user', 'user.index');
  app.resources('topics', '/api/v2/topics', 'topics');
};
