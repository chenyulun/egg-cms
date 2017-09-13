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
};
