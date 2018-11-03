import React, { Component } from 'react';
import styled from 'styled-components'
import { ModelProvider } from './providers'
import { 
  Sketchpad,
  Toolbar
} from './containers'

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
`
Wrapper.displayName = 'AppWrapper'

class App extends Component {
  render() {
    return (
      <ModelProvider>
        <Wrapper className="App">
          <Toolbar />
          <Sketchpad />
        </Wrapper>
      </ModelProvider>
    );
  }
}

export default App;
