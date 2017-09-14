/**
 * Created by EX_WLJR_CHENYULUN on 2017/9/14.
 */
'use strict';
// 定义创建接口的请求参数规则
const indexRule = {
  page: { type: 'string', required: false, format: /\d+/ },
  limit: { type: 'string', required: false, format: /\d+/ },
  tab: { type: 'enum', values: [ 'all', 'ask', 'share', 'job' ], required: false },
  mdrender: { type: 'boolean', required: false },
};
exports.index = function* (ctx) {
  // 调用 service 创建一个 topic
  console.log(ctx.request.query);
  ctx.validate(indexRule, ctx.request.query);
  const data = yield ctx.service.topics.index(ctx.request.query);
  // 设置响应体和状态码
  // data = data.map(item => item.title);
  ctx.body = {
    data,
  };
  ctx.status = 201;
};
// 定义创建接口的请求参数规则
const createRule = {
  accesstoken: 'string',
  title: 'string',
  tab: { type: 'enum', values: [ 'ask', 'share', 'job' ], required: false },
  content: 'string',
};
exports.create = function* (ctx) {
  // 校验 `ctx.request.body` 是否符合我们预期的格式
  // 如果参数校验未通过，将会抛出一个 status = 422 的异常
  ctx.validate(createRule);
  // 调用 service 创建一个 topic
  const id = yield ctx.service.topics.create(ctx.request.body);
  // 设置响应体和状态码
  ctx.body = {
    topic_id: id,
  };
  ctx.status = 201;
};
