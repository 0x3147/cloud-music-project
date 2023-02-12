import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

/**
 * @desc 发现页-排行页组件
 * @Author 康佳星
 * @Date 2023-02-11 18:11:30
 */
const Ranking: FC<Iprops> = () => {
  return <div>Ranking</div>
}

export default memo(Ranking)
