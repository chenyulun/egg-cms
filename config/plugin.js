'use strict';

// had enabled by egg
// exports.static = true;
module.exports = {
  i18n: {
    enable: false,
  },
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  validate: {
    package: 'egg-validate',
  },
  oauth2Server: {
    enable: true,
    package: 'egg-oauth2-server',
  },
};
