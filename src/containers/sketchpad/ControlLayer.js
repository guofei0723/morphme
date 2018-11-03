import React, { Component } from 'react'
import styled from 'styled-components'
import { LAYER_STYLE_SIZE } from './constants'
import Svg from './Svg'

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
        <Svg onClick={this.clickHandler}>

        </Svg>
      </Wrapper>
    )
  }
}