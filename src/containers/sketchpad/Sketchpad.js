import React, { Component } from 'react'
import styled from 'styled-components'
import * as CONSTS from '../constants'
import PathLayer from './PathLayer'
import ControlLayer from './ControlLayer'
import AnimLayer from './AnimLayer'
import { ModelContext } from '../../providers'

const Wrapper = styled.div`
  flex: 1 1 auto;
  height: 0;
  overflow: auto;
  display: flex;
  flex-direction: column;
`

const LayerBox = styled.div`
  flex: 1 0 440px;
  background-color: #BFCCD6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
LayerBox.displayName = 'LayerBox'

const Layers = styled.div`
  position: relative;
  background-color: white;
  /* margin: 20px auto; */
  ${CONSTS.LAYER_STYLE_SIZE}

  .layer {
    position: absolute;
    left: 0;
    top: 0;
  }
`
Layers.displayName = 'Layers'

export class Sketchpad extends Component {
  static contextType = ModelContext

  render () {
    let { data } = this.context
    let playingAnim = data.get('playingAnim')
    return (
      <Wrapper>
        <LayerBox className="sketchpad">
          <Layers className="layers">
            { playingAnim ? (
              <AnimLayer />
            ) : (
              <React.Fragment>
                <PathLayer />
                <ControlLayer />
              </React.Fragment>
            )}
          </Layers>
        </LayerBox>
      </Wrapper>
    )
  }
}