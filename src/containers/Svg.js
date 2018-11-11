import React from 'react'
import { WIDTH, HEIGHT } from './constants'

/**
 * 转换坐标
 * @param {number} x 
 * @param {number} y 
 */
export function transAxis (x, y) {
  return [x - WIDTH / 2, y - HEIGHT / 2]
}

/**
 * 原点坐标在中心位置的svg
 */
export default function Svg (props) {
  let { children, svgRef, ...restProps } = props
  let [ox, oy] = transAxis(WIDTH, HEIGHT)

  return (
    <svg 
      width={WIDTH} 
      height={HEIGHT}
      {...restProps}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      ref={svgRef}
    >
      <g transform={`translate(${ox}, ${oy})`}>
        { children }
      </g>
    </svg>
  )
}