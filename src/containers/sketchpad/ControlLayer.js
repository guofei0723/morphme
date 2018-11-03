import React, { Component } from 'react'
import styled from 'styled-components'
import { WIDTH, HEIGHT, LAYER_STYLE_SIZE } from './constants'

const Wrapper = styled.div`
  position: relative;
  ${LAYER_STYLE_SIZE}
`
Wrapper.displayName = 'ControlLayerWrapper'

export default class ControlLayer extends Component {
  clickHandler = (e) => {
    console.log(e.target)
    console.log(e.clientX, e.clientY)
  }
  render () {
    return (
      <Wrapper className="layer controllayer">
        <svg width={WIDTH} height={HEIGHT} onClick={this.clickHandler}>

        </svg>
      </Wrapper>
    )
  }
}