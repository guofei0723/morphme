import React, { Component } from 'react'
import styled from 'styled-components'
import { ModelContext } from '../../providers';
import { LAYER_STYLE_SIZE } from './constants'
import Svg, { transAxis } from './Svg'
import Anchor from './Anchor'

const Wrapper = styled.div`
  position: relative;
  ${LAYER_STYLE_SIZE}
`
Wrapper.displayName = 'ControlLayerWrapper'

export default class ControlLayer extends Component {
  static contextType = ModelContext

  $svg = React.createRef()

  clickHandler = (e) => {
    let [x, y] = this.mapPoint(e.clientX, e.clientY)
    let { data, API } = this.context
    let paths = data.get('paths')
    let curPath = data.get('editingPath')

    if (paths.size <= 0) {
      API.addPath(x, y)
    } else {
      API.addPointInPath(curPath, x, y)
    }
  }

  /**
   * 把屏幕坐标转换为画板坐标
   * @param {number} clientX 
   * @param {number} clientY 
   */
  mapPoint (clientX, clientY) {
    let box = this.$svg.current.getBoundingClientRect()
    let [x, y] = [clientX - box.left, clientY - box.top]

    return transAxis(x, y)
  }

  /**
   * 渲染锚点
   */
  renderAnchors (anchors) {
    return anchors.map(([x1, y1, px, py, x2, y2], i) => (
      <Anchor key={i}
        x={px}
        y={py}
        leftX={x1}
        leftY={y1}
        rightX={x2}
        rightY={y2}
      />
    ))
  }

  /**
   * 渲染路径
   */
  renderPaths (paths) {
    let { API } = this.context
    return paths.map((path, i) => (
      <g key={i}>
        <path
          d={API.getPathD(i)}
          strokeWidth={1}
          stroke="darkblue"
          fill="none"
        />
        { this.renderAnchors(path.get('points'))}
      </g>
    ))
  }

  render () {
    let { data } = this.context
    let paths = data.get('paths')

    return (
      <Wrapper className="layer controllayer">
        <Svg svgRef={this.$svg} onClick={this.clickHandler}>
        { this.renderPaths(paths)}
        </Svg>
      </Wrapper>
    )
  }
}