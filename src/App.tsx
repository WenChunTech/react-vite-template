import React from 'react'
import '@/App.scss'
import Slider from './slider'

const App: React.FC = () => (
  <div className="wh-full">
    <div className="h-5% bg-gray">header</div>
    <div className="h-95% w-full flex flex-row">
      <div className="h-full w-30% bg-neutral">
        <Slider />
      </div>
      <div className="h-full w-70% bg-fuchsia">Body</div>
    </div>
  </div>
)

export default App
