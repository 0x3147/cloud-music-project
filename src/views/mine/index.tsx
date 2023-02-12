import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

/**
 * @desc 我的音乐页
 * @Author 康佳星
 * @Date 2023-02-11 18:10:30
 */
const Mine: FC<Iprops> = () => {
  return <div>Mine</div>
}

export default memo(Mine)
