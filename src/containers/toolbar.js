import React, { Component } from 'react'
import styled from 'styled-components'
import { 
  ButtonGroup,
  AnchorButton
} from '@blueprintjs/core'
import { ModelContext, getImtbDatas, TOOLS } from '../providers';

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
  static contextType = ModelContext

  btnHandler = (e) => {
    let { API } = this.context
    API.setPathTool(+e.currentTarget.dataset.tool)
  }

  render () {
    let [pathTool] = getImtbDatas(this.context.data, 'pathTool')

    return (
      <Wrapper className="toolbar">
        <ButtonGroup minimal>
          <AnchorButton 
            icon="draw" 
            active={pathTool === TOOLS.PEN} 
            data-tool={TOOLS.PEN}
            onClick={this.btnHandler}
          />
          <AnchorButton 
            icon="pivot" 
            active={pathTool === TOOLS.ANCHOR}
            data-tool={TOOLS.ANCHOR}
            onClick={this.btnHandler}
          />
        </ButtonGroup>
      </Wrapper>
    )
  }
}