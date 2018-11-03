import React, { Component } from 'react'
import { ModelContext } from '../../providers'
import Svg from './Svg'

/**
 * 展示实际路径内容的图层
 */
export default class PathLayer extends Component {
  static contextType = ModelContext

  render () {
    let { data, API } = this.context
    let paths = data.get('paths')

    return (
      <Svg>
        { paths.map((_, i) => (
          <path key={i}
            d={API.getPathD(i)}
            strokeWidth={2}
            stroke="red"
            fill="none"
          />
        ))}
      </Svg>
    )
  }
}