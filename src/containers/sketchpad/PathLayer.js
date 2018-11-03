import React, { Component } from 'react'
import { ModelContext } from '../../providers'
import Svg from './Svg'

/**
 * 展示实际路径内容的图层
 */
export default class PathLayer extends Component {
  static contextType = ModelContext

  render () {
    let paths = this.context.data.get('paths')

    return (
      <Svg>
        { paths.map((path, i) => (
          <circle key={i}
            cx={path.get('x')}
            cy={path.get('y')}
            r={10}
            fill="red"
          />
        ))}
      </Svg>
    )
  }
}