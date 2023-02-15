import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

const AppFooter: FC<Iprops> = () => {
  return (
    <div>
      <h2>Footer</h2>
    </div>
  )
}

export default memo(AppFooter)
