'use strict';
// const path = require('path');
module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1505109923327_1955';

  // add your config here
  // config.logger = {
  //   dir: path.join(appInfo.baseDir, 'logs'),
  // };
  config.mongoose = {
    url: 'mongodb://localhost/cms',
    options: {},
  };
  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [ 'https://bank-static-stg.pingan.com.cn' ],
  };

  config.middleware = [ 'response', 'errorHandler' ];

  config.errorHandler = {
    match: '*',
  };

  return config;
};
