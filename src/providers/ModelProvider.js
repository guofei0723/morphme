import React, { Component} from 'react'
import { Map, fromJS } from 'immutable'
import { ModelContext } from './contexts';

export class ModelProvider extends Component {
  state = {
    data: fromJS({
      // 所有路径
      paths: [],
      // 当前路径工具
      pathTool: null
    })
  }

  /**
   * 添加路径
   */
  addPath = (x, y) => {
    this.setState(prev => {
      return {
        data: prev.data.update('paths', paths => paths.push(Map({x, y})))
      }
    })
  }

  render () {
    let { data } = this.state
    return (
      <ModelContext.Provider value={{
        data,
        addPath: this.addPath
      }} >
        {this.props.children}
      </ModelContext.Provider>
    )
  }
}