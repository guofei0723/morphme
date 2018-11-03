import React from 'react'
import { WIDTH, HEIGHT } from './constants'

/**
 * 原点坐标在中心位置的svg
 */
export default function Svg (props) {
  let { children, svgRef, ...restProps } = props
  return (
    <svg 
      {...restProps}
      width={WIDTH} 
      height={HEIGHT}
      ref={svgRef}
    >
      <g transform={`translate(${WIDTH / 2}, ${HEIGHT / 2})`}>
        { children }
      </g>
    </svg>
  )
}