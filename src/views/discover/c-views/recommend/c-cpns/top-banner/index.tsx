import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'

interface Iprops {
  children?: ReactNode
}

/**
 * @desc 推荐页顶部轮播图组件
 * @Author 康佳星
 * @Date 2023-02-18 01:57:31
 */
const TopBanner: FC<Iprops> = () => {
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqual
  )

  return (
    <div>
      {banners.map((item: any) => {
        return <div key={item.imageUrl}>{item.imageUrl}</div>
      })}
    </div>
  )
}

export default memo(TopBanner)
