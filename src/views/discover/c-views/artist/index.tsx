import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

/**
 * @desc 发现页-电台页组件
 * @Author 康佳星
 * @Date 2023-02-11 18:13:12
 */
const Artist: FC<Iprops> = () => {
  return <div>artist</div>
}

export default memo(Artist)
