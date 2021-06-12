import { useMemo, useState } from 'react'
import cx from 'classnames'

interface Props {
  tabs: {
    id: string
    title: React.ReactChild
    content: React.ReactChild
  }[]
}

const Tabs = ({ tabs }: Props) => {
  const [activeTabId, setActiveTabId] = useState(
    () => tabs.find((tab) => tab.id)?.id
  )

  const activeTab = useMemo(() => {
    return tabs.find((tab) => tab.id === activeTabId)
  }, [tabs, activeTabId])

  return (
    <div className='flex flex-col'>
      <nav className='pb-3 flex flex-row items-center gap-3'>
        {tabs.map((tab, index) => {
          return (
            <button
              key={tab.id}
              className={cx(
                'px-3 py-0.5 rounded-full uppercase tracking-wider border border-blue-600',
                activeTabId === tab.id ? 'bg-blue-400' : 'bg-blue-200'
              )}
              onClick={() => tab.id !== activeTabId && setActiveTabId(tab.id)}
            >
              {tab.title}
            </button>
          )
        })}
      </nav>
      <div>{activeTab ? activeTab.content : null}</div>
    </div>
  )
}

export default Tabs
