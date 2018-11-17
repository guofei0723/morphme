import React, { Component } from 'react'
import styled from 'styled-components'
import { 
  AnchorButton,
  ButtonGroup
} from '@blueprintjs/core'
import { ModelContext } from '../providers';

const Wrapper = styled.div`
  flex: 0 0 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5px;
  background-color: #F5F8FA;
  border-bottom: 1px solid #E1E8ED;
`

export class AnimBar extends Component {
  static contextType = ModelContext

  playHandler = () => {
    this.context.API.playAnim()
  }

  stopHandler = () => {
    this.context.API.stopAnim()
  }

  render () {
    let playingAnim = this.context.data.get('playingAnim')

    return (
      <Wrapper>
        <ButtonGroup minimal >
          <AnchorButton
            icon="play"
            onClick={this.playHandler}
            disabled={playingAnim}
          />
          <AnchorButton 
            icon="stop"
            onClick={this.stopHandler}
            disabled={!playingAnim}
          />
        </ButtonGroup>
      </Wrapper>
    )
  }
}