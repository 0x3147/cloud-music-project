import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

/**
 * @desc 发现页-推荐页组件
 * @Author 康佳星
 * @Date 2023-02-11 18:10:55
 */
const Recommend: FC<Iprops> = () => {
  return <div>Recommend</div>
}

export default memo(Recommend)
