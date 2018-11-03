import React, { Component } from 'react'
import { WIDTH, HEIGHT } from './constants'

/**
 * 展示实际路径内容的图层
 */
export default class PathLayer extends Component {
  render () {
    return (
      <svg width={WIDTH} height={HEIGHT} className="layer path-layer">
        <g transform={`translate(${WIDTH / 2}, ${HEIGHT / 2})`}>
          <circle r={20} fill="red" />
        </g>
      </svg>
    )
  }
}