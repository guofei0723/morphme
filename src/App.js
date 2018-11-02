import React, { Component } from 'react';
import styled from 'styled-components'
import { 
  Toolbar
} from './containers'

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
`
Wrapper.displayName = 'AppWrapper'

class App extends Component {
  render() {
    return (
      <Wrapper className="App">
        <Toolbar />
      </Wrapper>
    );
  }
}

export default App;
