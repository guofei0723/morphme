import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DraggableCore } from 'react-draggable';


const S = 6
const COLOR = 'blue'

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
     * 是否每一个
     */
    isFirst: PropTypes.bool,
    /**
     * 是否最后一个
     */
    isLast: PropTypes.bool,
    /**
     * 是否显示控制点
     */
    showControl: PropTypes.bool
  }

  static defaultProps = {
    moveable: false,
    showControl: false
  }

  moveHandler = (_, {deltaX: dx, deltaY: dy}) => {
    let { pathIndex, pointIndex, API } = this.props

    API.movePathPoint(pathIndex, pointIndex, dx, dy)
  }

  clickHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  /**
   * 修改左侧控制点
   */
  leftControlHandler = (_, {deltaX, deltaY}) => {
    let { pathIndex, pointIndex, API } = this.props
    
    API.movePathPointControl(pathIndex, pointIndex, [deltaX, deltaY], [0, 0])
  }
  
  /**
   * 修改右侧控制点
   */
  rightControlHandler = (_, {deltaX, deltaY}) => {
    let { pathIndex, pointIndex, API } = this.props
    
    API.movePathPointControl(pathIndex, pointIndex, [0, 0], [deltaX, deltaY])
  }

  /**
   * 绘制控制点
   */
  renderControl () {
    let { leftX, leftY, rightX, rightY, isFirst, isLast } = this.props

    return (
      <React.Fragment>
        { isFirst ? null : (
          <DraggableCore
            onDrag={this.leftControlHandler}
          >
            <circle 
              cx={leftX}
              cy={leftY}
              r={S / 2}
              fill={COLOR}
            />
          </DraggableCore>
        )}
        { isLast ? null : (
          <DraggableCore
            onDrag={this.rightControlHandler}
          >
            <circle 
              cx={rightX}
              cy={rightY}
              r={S / 2}
              fill={COLOR}
            />
          </DraggableCore>
        )}
      </React.Fragment>
    )
  }

  /**
   * 绘制控制线
   */
  renderControlLine () {
    let { leftX, leftY, rightX, rightY, x, y } = this.props
    return (
      <React.Fragment>
        <line x1={leftX} y1={leftY} x2={x} y2={y} stroke={COLOR} strokeWidth={1} />
        <line x1={rightX} y1={rightY} x2={x} y2={y} stroke={COLOR} strokeWidth={1} />
      </React.Fragment>
    )
  }

  render () {
    let { x, y, showControl } = this.props

    return (
      <g>
        { showControl ? this.renderControlLine() : null }
        <DraggableCore
          onDrag={this.moveHandler}
        >
          <rect 
            x={x - S / 2} 
            y={y - S / 2} 
            width={S} 
            height={S} 
            stroke={COLOR}
            strokeWidth={1}
            fill="white"
            onClick={this.clickHandler}
          />
        </DraggableCore>
        { showControl ? this.renderControl() : null}
      </g>
    )
  }
}