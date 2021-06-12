import { motion } from 'framer-motion'
import React, { useState } from 'react'
import Tabs from '~components/Tabs'
import { date } from '~services/date'
import type { Session } from '../types'
import {
  getSessionDistance,
  getSessionDuration,
  getSnapshotPace,
  getSnapshotTime,
  secondsToTime,
} from '../utils'
import SessionGraph from './SessionGraph'

interface Props {
  averagePace: number
  session: Session
}

const SessionBlock = ({ averagePace, session }: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <div className='bg-blue-200 rounded-md text-blue-900 font-light overflow-hidden'>
      <div className='flex flex-row items-center p-3'>
        <div className='flex flex-row items-center gap-3'>
          <span className='px-2 py-1 font-black bg-yellow-500 text-yellow-100 rounded-md'>
            {getSessionDistance(session).toFixed(2)} mi
          </span>
          <span className='px-2 py-1 font-black bg-blue-500 text-blue-100 rounded-md'>
            {getSessionDuration(session, 'long')}
          </span>
          <span className='px-2 py-1 font-black bg-green-500 text-green-100 rounded-md'>
            {date(session.dateTime).format('DD MMM YYYY')}
          </span>
          <span className='px-2 py-1 font-black bg-purple-500 text-purple-100 rounded-md'>
            {secondsToTime(
              Math.round(
                session.snapshots[session.snapshots.length - 1].time /
                  session.snapshots[session.snapshots.length - 1].mileage
              )
            )}{' '}
            / mile
          </span>
        </div>
        <div className='ml-auto flex flex-row items-center gap-3'>
          <span className='w-6 h-6 rounded-full bg-yellow-600 text-center text-yellow-50 font-black'>
            {session.difficulty}
          </span>
          <button
            onClick={() => setOpen(!open)}
            className='text-sm bg-transparent border-2 border-blue-600 font-black text-blue-600 rounded-md px-3 py-2 hover:text-white hover:bg-blue-600'
          >
            {open ? 'CLOSE' : 'OPEN'}
          </button>
        </div>
      </div>
      <motion.div
        variants={{
          open: { height: 'auto' },
          closed: { height: '0px' },
        }}
        animate={open ? 'open' : 'closed'}
      >
        <div className='p-3 bg-blue-100'>
          <Tabs
            tabs={[
              {
                id: 'splits',
                content: (
                  <div className='grid grid-cols-6 gap-1'>
                    <p className='p-2 bg-blue-300 rounded-md'>Mileage</p>
                    <p className='p-2 bg-blue-300 rounded-md'>Time</p>
                    <p className='p-2 bg-blue-300 rounded-md'>
                      Average Pace (time per mile)
                    </p>
                    <p className='p-2 bg-blue-300 rounded-md'>Δ Mileage</p>
                    <p className='p-2 bg-blue-300 rounded-md'>Δ Time</p>
                    <p className='p-2 bg-blue-300 rounded-md'>Δ Pace</p>
                    {session.snapshots.map((snapshot, ix) => {
                      return (
                        <React.Fragment key={snapshot.time}>
                          <p className='p-2 bg-blue-200 rounded-md'>
                            {snapshot.mileage.toFixed(2)}
                          </p>
                          <p className='p-2 bg-blue-200 rounded-md'>
                            {getSnapshotTime(snapshot)}
                          </p>
                          <p className='p-2 bg-blue-200 rounded-md'>
                            {getSnapshotPace(snapshot)}
                          </p>
                          {ix === 0 ? (
                            <div className='col-span-3' />
                          ) : (
                            <>
                              <p className='p-2 bg-blue-200 rounded-md'>
                                +
                                {(
                                  snapshot.mileage -
                                  session.snapshots[ix - 1].mileage
                                ).toFixed(2)}
                              </p>
                              <p className='p-2 bg-blue-200 rounded-md'>
                                +
                                {secondsToTime(
                                  snapshot.time - session.snapshots[ix - 1].time
                                )}
                              </p>
                              <p className='p-2 bg-blue-200 rounded-md'>
                                {secondsToTime(
                                  Math.round(
                                    (snapshot.time -
                                      session.snapshots[ix - 1].time) /
                                      (snapshot.mileage -
                                        session.snapshots[ix - 1].mileage)
                                  )
                                )}
                              </p>
                            </>
                          )}
                        </React.Fragment>
                      )
                    })}
                  </div>
                ),
                title: 'Splits',
              },
              {
                id: 'graphs',
                content: (
                  <div className='h-96'>
                    <SessionGraph averagePace={averagePace} session={session} />
                  </div>
                ),
                title: 'Pace Graph',
              },
            ]}
          />
        </div>
      </motion.div>
    </div>
  )
}

export default SessionBlock
