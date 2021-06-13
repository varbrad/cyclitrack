import Leaderboard from '~domains/records/Leaderboard'
import SessionBlock from '~domains/session/components/SessionBlock'
import { sessions } from '~domains/session/types'
import {
  getAverageSessionsSpeed,
  getPaceFromSessions,
  getRawPaceFromSessions,
  getRawSessionPace,
  getSessionFinalTime,
  secondsToDuration,
  secondsToTime,
} from '~domains/session/utils'
import { date } from '~services/date'

const Home = () => {
  return (
    <div className='flex flex-col min-h-screen w-screen overflow-auto bg-blue-50'>
      <header className='flex flex-row items-center px-3 py-4 bg-blue-400 font-black text-blue-900 text-lg'>
        Cyclitrack
        <div className='ml-auto flex flex-row gap-3 font-normal text-white text-sm'>
          <p>
            Total mileage
            <span className='ml-1 px-2 rounded-md py-1 bg-green-200 text-green-900 font-black'>
              {sessions
                .reduce((previous, session) => {
                  return (
                    previous +
                    session.snapshots[session.snapshots.length - 1].mileage
                  )
                }, 0)
                .toFixed(2)}{' '}
              mi
            </span>
          </p>
          <p>
            Total time
            <span className='ml-1 px-2 rounded-md py-1 bg-purple-200 text-purple-900 font-black'>
              {secondsToDuration(
                Math.round(
                  sessions.reduce((previous, session) => {
                    return (
                      previous +
                      session.snapshots[session.snapshots.length - 1].time
                    )
                  }, 0)
                ),
                'long'
              )}{' '}
            </span>
          </p>
          <p>
            Average pace
            <span className='ml-1 px-2 rounded-md py-1 bg-pink-200 text-pink-900 font-black'>
              {getPaceFromSessions(sessions)} / mile
            </span>
          </p>
          <p>
            Average speed
            <span className='ml-1 px-2 rounded-md py-1 bg-indigo-200 text-indigo-900 font-black'>
              {getAverageSessionsSpeed(sessions).toFixed(2)} mph
            </span>
          </p>
        </div>
      </header>
      <main className='p-6 space-y-6'>
        <div className='grid grid-cols-3 gap-3'>
          <Leaderboard
            title='Furthest distance'
            records={[...sessions]
              .sort((a, b) => {
                return b.snapshots[b.snapshots.length - 1].mileage <
                  a.snapshots[a.snapshots.length - 1].mileage
                  ? -1
                  : 1
              })
              .map((session) => {
                const str =
                  session.snapshots[
                    session.snapshots.length - 1
                  ].mileage.toFixed(2) + ' mi'

                return (
                  <>
                    {str}
                    <span className='text-xs px-1 py-1 ml-1 italic font-light'>
                      {date(session.dateTime).format('DD MMM YYYY')}
                    </span>
                  </>
                )
              })}
          />
          <Leaderboard
            title='Longest session'
            records={[...sessions]
              .sort((a, b) => {
                return b.snapshots[b.snapshots.length - 1].time <
                  a.snapshots[a.snapshots.length - 1].time
                  ? -1
                  : 1
              })
              .map((session) => {
                const str = secondsToTime(getSessionFinalTime(session))

                return (
                  <>
                    {str}
                    <span className='text-xs px-1 py-1 ml-1 italic font-light'>
                      {date(session.dateTime).format('DD MMM YYYY')}
                    </span>
                  </>
                )
              })}
          />
          <Leaderboard
            title='Fastest pace'
            records={[...sessions]
              .sort((a, b) => {
                return getRawSessionPace(b) < getRawSessionPace(a) ? 1 : -1
              })
              .map((session) => {
                const str =
                  secondsToTime(getRawSessionPace(session)) + ' / mile'

                return (
                  <>
                    {str}
                    <span className='text-xs px-1 py-1 ml-1 italic font-light'>
                      {date(session.dateTime).format('DD MMM YYYY')}
                    </span>
                  </>
                )
              })}
          />
        </div>
        <div className='space-y-3'>
          {sessions.map((session, ix) => {
            return (
              <SessionBlock
                key={ix}
                averagePace={getRawPaceFromSessions(sessions)}
                session={session}
              />
            )
          })}
        </div>
      </main>
    </div>
  )
}

export default Home
