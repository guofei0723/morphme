import React, { Component } from 'react'
import PropTypes from 'prop-types'


const W = 6
const H = 6

/**
 * 路径上的锚点
 */
export default class Anchor extends Component {
  static propTypes = {
    /**
     * 锚点横坐标
     */
    x: PropTypes.number.isRequired,
    /**
     * 锚点纵坐标
     */
    y: PropTypes.number.isRequired,
    /**
     * 左侧控制点的横坐标
     */
    leftX: PropTypes.number.isRequired,
    /**
     * 左侧控制点的纵坐标
     */
    leftY: PropTypes.number.isRequired,
    /**
     * 右侧控制点的横坐标
     */
    rightX: PropTypes.number.isRequired,
    /**
     * 右侧控制点的纵坐标
     */
    rightY: PropTypes.number.isRequired
  }

  render () {
    let {x, y} = this.props

    return (
      <g>
        <rect 
          x={x - W / 2} 
          y={y - H / 2} 
          width={W} 
          height={H} 
          stroke="darkblue"
          strokeWidth={1}
          fill="white"
        />
      </g>
    )
  }
}