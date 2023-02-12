import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

/**
 * @desc 下载页
 * @Author 康佳星
 * @Date 2023-02-11 18:09:19
 */
const Download: FC<Iprops> = () => {
  return <div>Download</div>
}

export default memo(Download)
