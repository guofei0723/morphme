import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DraggableCore } from 'react-draggable';


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
    rightY: PropTypes.number.isRequired,
    /**
     * 路径索引
     */
    pathIndex: PropTypes.number.isRequired,
    /**
     * 路径上点的索引
     */
    pointIndex: PropTypes.number.isRequired,
    /**
     * 数据接口对象
     */
    API: PropTypes.object.isRequired,
    /**
     * 是否可以移动
     */
    moveable: PropTypes.bool
  }

  static defaultProps = {
    moveable: false
  }

  moveHandler = (_, {deltaX: dx, deltaY: dy}) => {
    let { pathIndex, pointIndex, API } = this.props

    API.movePathPoint(pathIndex, pointIndex, dx, dy)
  }

  render () {
    let {x, y, moveable} = this.props

    return (
      <g>
        <DraggableCore
          onDrag={this.moveHandler}
          disabled={!moveable}
        >
          <rect 
            x={x - W / 2} 
            y={y - H / 2} 
            width={W} 
            height={H} 
            stroke="darkblue"
            strokeWidth={1}
            fill="white"
          />
        </DraggableCore>
      </g>
    )
  }
}