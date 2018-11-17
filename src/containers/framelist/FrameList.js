import React, { Component } from 'react'
import styled from 'styled-components'
import { Card, AnchorButton } from '@blueprintjs/core'
import { ModelContext } from '../../providers'
import Svg from '../Svg'
import Path from '../Path'

const Wrapper = styled.div`
  flex: 0 0 60px;
  position: relative;
  padding: 5px;
  background-color: #F5F8FA;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const Thumb = styled(Card)`
  display: inline-block;
  position: relative;
  width: 50px;
  height: 50px;
  padding: 0;
  margin: 0 5px;
`

export class FrameList extends Component {
  static contextType = ModelContext

  addNewFrame = () => {
    let { API } = this.context

    API.makeCurrentToFrame()
  }

  render () {
    let { data, API } = this.context
    let frames = data.get('frames')
    let playingAnim = data.get('playingAnim')

    return (
      <Wrapper>
        { frames.map((frame, i) => (
          <Thumb interactive={true} key={i}>
            <Frame paths={frame} API={API} />
          </Thumb>
        ))}
        
        { playingAnim ? undefined : (
          <AnchorButton 
            icon="plus" 
            onClick={this.addNewFrame}
          />
        )}
      </Wrapper>
    )
  }
}

function Frame (props) {
  let { paths, API } = props
  return (
    <Svg width="100%" height="100%">
      <Path paths={paths} API={API} />
    </Svg>
  )
}