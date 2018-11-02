import React, { Component } from 'react'
import styled from 'styled-components'
import { 
  ButtonGroup,
  AnchorButton
} from '@blueprintjs/core'

const Wrapper = styled.div`
  flex: 0 0 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5px;
  background-color: #F5F8FA;
`
Wrapper.displayName = 'ToolbarWrapper'

/**
 * 路径工具栏
 */
export class Toolbar extends Component {
  render () {
    return (
      <Wrapper className="toolbar">
        <ButtonGroup minimal>
          <AnchorButton icon="database" active={false} />
          <AnchorButton icon="function" />
        </ButtonGroup>
      </Wrapper>
    )
  }
}