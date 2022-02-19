/**
 * ********************************************************
 *
 * taoran 公共方法
 *
 * ********************************************************
 */

/**
 * 毫秒级时间戳转换成日期
 *
 * @param {*} fmt
 */
export function formatDate(fmt) {
  fmt = parseInt(fmt)
  const date = new Date(fmt)
  const Y = date.getFullYear() + '-'
  const M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) + '-' : date.getMonth() + 1 + '-'
  const D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' '
  const h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':'
  const m = date.getMinutes() < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':'
  const s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  return Y + M + D + h + m + s
}

/**
 * 基于element的消息提示
 * @param {*} message 
 * @param {*} type 
 */
// export function elMessage(message, type = 'success') {
//   this.$message({
//     showClose: true,
//     message: message,
//     type: type
//   });
// }

