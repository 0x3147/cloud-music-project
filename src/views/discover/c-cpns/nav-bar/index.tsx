import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { NavWrapper } from '@/views/discover/c-cpns/nav-bar/style'
import { discoverMenu } from '@/assets/data/local_data'

interface Iprops {
  children?: ReactNode
}

/**
 * @desc 发现页二级导航栏组件
 * @Author 康佳星
 * @Date 2023-02-17 23:54:20
 */
const NavBar: FC<Iprops> = () => {
  return (
    <NavWrapper>
      <div className="nav wrap-v1">
        {discoverMenu.map((item) => {
          return (
            <div className="item" key={item.link}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </div>
          )
        })}
      </div>
    </NavWrapper>
  )
}

export default memo(NavBar)
