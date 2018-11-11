import React, { Component} from 'react'
import { fromJS, List } from 'immutable'
import { ModelContext } from './contexts';

/**
 * 工具
 */
export const TOOLS = {
  PEN: 1,
  ANCHOR: 2,
  MOVE: 3
}

export class ModelProvider extends Component {
  state = {
    data: fromJS({
      // 所有路径
      paths: [],
      // 当前路径工具
      pathTool: TOOLS.PEN,
      // 正在编辑的路径
      editingPath: null,
      // 帧列表
      frames: []
    })
  }

  /**
   * 设置当前路径工具
   * @param {number} tool - 路径工具
   */
  setPathTool (tool) {
    this.setState(prev => ({
      data: prev.data.set('pathTool', tool)
    }))
  }

  /**
   * 添加路径
   */
  addPath (x, y) {
    this.setState(prev => {
      let data = prev.data.update('paths', paths => paths.push(fromJS({points: [[x, y, x, y, x, y]]})))
      // 当前编辑的路径
      data = data.set('editingPath', data.get('paths').size - 1)
      return {
        data
      }
    })
  }

  /**
   * 在指定的路径上增加点
   */
  addPointInPath (pathIndex, x, y) {
    this.setState(prev => {
      let data = prev.data.updateIn(
        ['paths', pathIndex, 'points'], 
        points => points.push(List([x, y, x, y, x, y]))
      )
      return {
        data
      }
    })
  }

  transPathD (path) {
    if (!path) return ''

    return path.get('points').reduce((r, n, i, points) => {
      let [px, py] = n.slice(2, 4)
      // 起始点
      if (i === 0) return `M ${px} ${py}`
      let [x1, y1] = points.get(i - 1).slice(4, 6)
      let [x2, y2] = n.slice(0, 2)
      return `${r} C ${[x1, y1, x2, y2, px, py].join(' ')}`
    }, '')
  }

  /**
   * 获取路径指令字符串
   */
  getPathD (pathIndex) {
    let path = this.state.data.getIn(['paths', pathIndex])

    return this.transPathD(path)
  }

  /**
   * 移动路径上的点
   * @param {number} pathIndex - 路径索引
   * @param {number} pointIndex - 锚点索引
   * @param {number} dx - 横坐标移动量
   * @param {number} dy - 纵坐标移动量
   */
  movePathPoint (pathIndex, pointIndex, dx, dy) {
    this.setState(prev => {
      return {
        data: prev.data.updateIn(
          ['paths', pathIndex, 'points', pointIndex], 
          point => point.map((v, i) => i % 2 === 0 ? v + dx : v + dy)
        )
      }
    })
  }

  /**
   * 修改路径上锚点的控制点
   * @param {number} pathIndex - 路径索引
   * @param {number} pointIndex - 锚点索引
   * @param {array} cd1 - 左侧控制点
   * @param {array} cd2 - 右侧控制点
   */
  movePathPointControl (pathIndex, pointIndex, cd1, cd2) {
    this.setState(prev => {
      let [x1, y1] = cd1
      let [x2, y2] = cd2

      return {
        data: prev.data.updateIn(
          ['paths', pathIndex, 'points', pointIndex], 
          point => point.map((v, i) => {
            switch(i) {
              case 0: return v + x1
              case 1: return v + y1
              case 4: return v + x2
              case 5: return v + y2
              default: return v
            }
          })
        )
      }
    })
  }

  render () {
    let { data } = this.state
    return (
      <ModelContext.Provider value={{
        data,
        API: this
      }} >
        {this.props.children}
      </ModelContext.Provider>
    )
  }
}