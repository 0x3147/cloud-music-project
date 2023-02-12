import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

/**
 * @desc 发现页-歌单页组件
 * @Author 康佳星
 * @Date 2023-02-11 18:12:25
 */
const Songs: FC<Iprops> = () => {
  return <div>Songs</div>
}

export default memo(Songs)
