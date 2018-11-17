import React, { Component } from 'react'
import { PATH_PROPERTY } from './constants'

export default class Path extends Component {
  render () {
    let { paths, API, pathProps={} } = this.props

    return paths.map((path, i) => (
      <path key={i}
        d={API.transPathD(path)}
        {...PATH_PROPERTY}
        {...pathProps}
      />
    ))
  }
}

