import React, { Component } from 'react';
import styled from 'styled-components'
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
      <Wrapper className="App">
        <Toolbar />
        <Sketchpad />
      </Wrapper>
    );
  }
}

export default App;
