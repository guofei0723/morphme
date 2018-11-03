import React, { Component } from 'react'
import Svg from './Svg'

/**
 * 展示实际路径内容的图层
 */
export default class PathLayer extends Component {
  render () {
    return (
      <Svg>
        <circle r={20} fill="red" />
      </Svg>
    )
  }
}