import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

/**
 * @desc 关注页
 * @Author 康佳星
 * @Date 2023-02-11 18:09:54
 */
const Focus: FC<Iprops> = () => {
  return <div>Focus</div>
}

export default memo(Focus)
