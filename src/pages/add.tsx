import { useState } from 'react'
import cx from 'classnames'

const Add = () => {
  const [type, setType] = useState<'mileage' | 'time'>('mileage')
  const [rows, setRows] = useState([])

  return (
    <div className='flex flex-col bg-blue-100 min-h-screen w-screen'>
      <header className='font-light p-2 text-white bg-indigo-900'>
        <p>Cyclitrack</p>
      </header>
      <main className='py-3 px-12'>
        <div className='overflow-hidden flex flex-row items-stretch shadow-md rounded-full'>
          <button
            onClick={() => setType('mileage')}
            className={cx(
              'py-3 text-right flex-1 transition-all',
              type === 'mileage'
                ? 'font-black bg-purple-800 text-purple-100 pr-4'
                : 'font-light bg-purple-200 text-sm pr-2'
            )}
          >
            Mileage
          </button>
          <button
            onClick={() => setType('time')}
            className={cx(
              'py-3 text-left flex-1 transition-all',
              type === 'time'
                ? 'font-black bg-purple-800 text-purple-100 pl-4'
                : 'font-light bg-purple-200 text-purple-800 ext-sm pl-2'
            )}
          >
            Time
          </button>
        </div>
      </main>
    </div>
  )
}

export default Add
