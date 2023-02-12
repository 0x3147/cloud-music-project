import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

/**
 * @desc 发现页-新碟上架页组件
 * @Author 康佳星
 * @Date 2023-02-11 18:13:40
 */
const Album: FC<Iprops> = () => {
  return <div>album</div>
}

export default memo(Album)
