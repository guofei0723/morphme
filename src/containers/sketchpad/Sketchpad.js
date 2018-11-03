import React, { Component } from 'react'
import styled from 'styled-components'
import * as CONSTS from './constants'
import PathLayer from './PathLayer'
import ControlLayer from './ControlLayer'

const Wrapper = styled.div`
  flex: 1 0 500px;
  background-color: #BFCCD6;
`
Wrapper.displayName = 'SketchpadWrapper'

const Layers = styled.div`
  position: relative;
  background-color: white;
  margin: 20px auto;
  ${CONSTS.LAYER_STYLE_SIZE}

  .layer {
    position: absolute;
    left: 0;
    top: 0;
  }
`
Layers.displayName = 'Layers'

export class Sketchpad extends Component {
  render () {
    return (
      <Wrapper className="sketchpad">
        <Layers className="layers">
          <PathLayer />
          <ControlLayer />
        </Layers>
      </Wrapper>
    )
  }
}