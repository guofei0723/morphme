import React, { Component } from 'react'
import styled from 'styled-components'
import { Card } from '@blueprintjs/core'

const Wrapper = styled.div`
  flex: 0 0 50px;
  position: relative;
  padding: 5px;
  background-color: #F5F8FA;
`

const Thumb = styled(Card)`
  display: inline-block;
  margin: 0 5px;
`

export class FrameList extends Component {
  render () {
    return (
      <Wrapper>
        <Thumb interactive={true}>
          List
        </Thumb>
        
        <Thumb interactive={true}>
          List
        </Thumb>

      </Wrapper>
    )
  }
}