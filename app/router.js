'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/user', 'user.index');
  app.all('/user/token', app.oAuth2Server.token());
  app.get('/user/authenticate', app.oAuth2Server.authenticate({ allowBearerTokensInQueryString: true }), 'user.authenticate');
  app.resources('topics', '/api/v2/topics', 'topics');
};
