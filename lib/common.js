/*
 * @Description: 
 * @Date: 2022-08-18 17:22:35
 * @FilePath: /chat-room/lib/common.js
 * @LastEditTime: 2022-08-18 17:33:39
 */
const dev = process.env.NODE_ENV !== "production";

const env = dev ? 'dev' : 'prod'

const hostMap = {
  prod: '139.224.67.111',
  dev: '127.0.0.1'
}

const hostname = hostMap[env]

const port = 6002

//mongodb连接字符串
const DB_CONN_STR = `mongodb://twosugar:ty13145821188@${hostname}:26016`;

module.exports = {
    dev,
    env,
    hostMap,
    hostname,
    port,
    DB_CONN_STR
}