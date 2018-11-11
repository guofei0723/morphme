import React, { Component } from 'react'

export default class Path extends Component {
  render () {
    let { paths, API, pathProps={} } = this.props

    return paths.map((path, i) => (
      <path key={i}
        d={API.transPathD(path)}
        strokeWidth={2}
        stroke="red"
        fill="none"
        {...pathProps}
      />
    ))
  }
}