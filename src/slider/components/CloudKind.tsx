import React from 'react'
import { Tabs } from 'antd'

const CloudKind: React.FC = () => (
  <Tabs
    defaultActiveKey="1"
    centered
    items={new Array(2).fill(null).map((_, i) => {
      const id = String(i + 1)
      return {
        label: `Tab ${id}`,
        key: id,
        children: `Content of Tab Pane ${id}`
      }
    })}
  />
)

export default CloudKind
