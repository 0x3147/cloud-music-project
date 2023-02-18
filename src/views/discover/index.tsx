import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '@/views/discover/c-cpns/nav-bar'

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
      <NavBar />
      <Suspense fallback="...">
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(Discover)
