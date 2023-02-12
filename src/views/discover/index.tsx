import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Link, Outlet } from 'react-router-dom'

interface Iprops {
  children?: ReactNode
}

/**
 * @desc 发现页
 * @Author 康佳星
 * @Date 2023-02-11 18:08:38
 */
const Discover: FC<Iprops> = () => {
  return (
    <div>
      <div>
        <Link to="/discover/recommend">推荐</Link>
        <Link to="/discover/ranking">排行榜</Link>
        <Link to="discover/songs">歌单</Link>
        <Link to="discover/djradio">主播电台</Link>
        <Link to="discover/artist">歌手</Link>
        <Link to="discover/album">新碟上架</Link>
      </div>
      <Suspense fallback="...">
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(Discover)
