import React, { Component } from 'react'
import styled from 'styled-components'
import { ModelContext } from '../../providers'
import Svg from '../Svg'
import { PATH_PROPERTY } from '../constants'

const AnimPath = styled.path`
  transition: all .3s ease;
`

export default class AnimLayer extends Component {
  static contextType = ModelContext


  anim = () => {
    this.setState(prev => {
      let {frameDs, frameIndex} = prev

      return {
        frameIndex: (frameIndex + 1) % frameDs.length
      }
    })

    this._animTimer = setTimeout(this.anim, 300)
  }

  state = {
    frameDs: this.getFrameAnim(),
    frameIndex: 0
  }

  getFrameAnim () {
    let { data, API } = this.context
    let frames = data.get('frames')
    let [d1, d2] = frames.map(paths => paths.map(path => API.transPathD(path)))

    return [d1.get(0), d2.get(0)]
  }

  componentDidMount () {
    this.anim()
  }

  componentWillUnmount () {
    clearTimeout(this._animTimer)
  }

  render () {
    return (
      <Svg>
        <AnimPath 
          d={this.state.frameDs[this.state.frameIndex]}
          {...PATH_PROPERTY} 
        />
      </Svg>
    )
  }
}