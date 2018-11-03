import React, { Component } from 'react'
import styled from 'styled-components'
import { ModelContext } from '../../providers';
import { LAYER_STYLE_SIZE } from './constants'
import Svg, { transAxis } from './Svg'

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

  render () {
    let { data, API } = this.context
    let paths = data.get('paths')

    return (
      <Wrapper className="layer controllayer">
        <Svg svgRef={this.$svg} onClick={this.clickHandler}>
        { paths.map((_, i) => (
          <path key={i}
            d={API.getPathD(i)}
            strokeWidth={1}
            stroke="steelblue"
            fill="none"
          />
        ))}
        </Svg>
      </Wrapper>
    )
  }
}