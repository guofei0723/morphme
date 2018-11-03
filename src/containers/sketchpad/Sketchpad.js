import React, { Component } from 'react'
import styled from 'styled-components'
import * as CONSTS from './constants'
import PathLayer from './PathLayer'

const Wrapper = styled.div`
  flex: 1 0 500px;
  background-color: #BFCCD6;
`
Wrapper.displayName = 'SketchpadWrapper'

const Layers = styled.div`
  position: relative;
  margin: 20px auto;
  width: ${CONSTS.WIDTH}px;
  height: ${CONSTS.HEIGHT}px;
  background-color: white;

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
        </Layers>
      </Wrapper>
    )
  }
}