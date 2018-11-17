import React, { Component } from 'react'
import { ModelContext } from '../../providers'
import Svg from '../Svg'

export default class AnimLayer extends Component {
  static contextType = ModelContext

  render () {
    return (
      <Svg>

      </Svg>
    )
  }
}