import { useState } from 'react'
import { date } from '~services/date'
import type { Session } from '../types'
import { getSessionDistance, getSessionDuration } from '../utils'

interface Props {
  session: Session
}

const SessionRow = ({ session }: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <div className='rounded-md overflow-hidden'>
      <div className='p-2 bg-indigo-200 flex flex-row items-stretch gap-1 text-sm font-black'>
        <p className='p-2 bg-yellow-300 text-yellow-800 rounded-md'>
          {getSessionDistance(session).toFixed(2)} mi
        </p>
        <p className='p-2 bg-green-300 text-green-800 rounded-md'>
          {getSessionDuration(session, 'long')}
        </p>
        <p className='p-2 bg-blue-300 text-blue-800 rounded-md'>
          {date(session.dateTime).format('DD MMM YY')}
        </p>
        <button
          className='ml-auto px-2 bg-purple-600 text-white font-black rounded-lg'
          onClick={() => setOpen(!open)}
        >
          OPEN
        </button>
      </div>
    </div>
  )
}

export default SessionRow
