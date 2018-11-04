/**
 * 获取Immutable对像中的多个数据
 * @param {object} obj - Immutable对象
 * @param  {...any} keys 
 */
export function getImtbDatas (obj, ...keys) {
  return keys.map(k => {
    if (typeof k === 'string') {
      return obj.get(k)
    }

    return obj.getIn(k)
  })
}