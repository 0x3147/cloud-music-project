import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import hyRequest from '@/service'

interface Iprops {
  children?: ReactNode
}

export interface IBannerData {
  imageUrl: string
  targetId: number
  adid: any
  targetType: number
  titleColor: string
  typeTitle: string
  url: any
  exclusive: boolean
  monitorImpress: any
  monitorClick: any
  monitorType: any
  monitorImpressList: any
  monitorClickList: any
  monitorBlackList: any
  extMonitor: any
  extMonitorInfo: any
  adSource: any
  adLocation: any
  adDispatchJson: any
  encodeId: string
  program: any
  event: any
  video: any
  song: any
  scm: string
  bannerBizType: string
}

/**
 * @desc 发现页-推荐页组件
 * @Author 康佳星
 * @Date 2023-02-11 18:10:55
 */
const Recommend: FC<Iprops> = () => {
  const [banners, setBanners] = useState<IBannerData[]>([])

  useEffect(() => {
    hyRequest
      .get({
        url: '/banner'
      })
      .then((res) => {
        setBanners(res.banners)
      })
  }, [])

  return (
    <div>
      {banners.map((item, index) => {
        return (
          <div key={index}>
            <img src={item.imageUrl} />
          </div>
        )
      })}
    </div>
  )
}

export default memo(Recommend)
