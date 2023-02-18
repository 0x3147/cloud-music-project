import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppDispatch } from '@/store'
import { fetchBannerDataAction } from '@/views/discover/c-views/recommend/store/recommend'
import TopBanner from '@/views/discover/c-views/recommend/c-cpns/top-banner'

interface Iprops {
  children?: ReactNode
}

/**
 * @desc 发现页-推荐页组件
 * @Author 康佳星
 * @Date 2023-02-11 18:10:55
 */
const Recommend: FC<Iprops> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
  }, [])

  return (
    <div>
      <TopBanner />
    </div>
  )
}

export default memo(Recommend)
