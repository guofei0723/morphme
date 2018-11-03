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
    this.context.addPath(x, y)
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
    return (
      <Wrapper className="layer controllayer">
        <Svg svgRef={this.$svg} onClick={this.clickHandler}>

        </Svg>
      </Wrapper>
    )
  }
}