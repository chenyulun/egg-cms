/**
 * Created by EX_WLJR_CHENYULUN on 2017/9/22.
 */
'use strict';
module.exports = () => {
  return function* (next) {
    yield next;
  };
};
