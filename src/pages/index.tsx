import SessionBlock from '~domains/session/components/SessionBlock'
import { sessions } from '~domains/session/types'
import { secondsToDuration } from '~domains/session/utils'

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
        </div>
      </header>
      <main className='p-6 space-y-3'>
        {sessions.map((session, ix) => {
          return <SessionBlock key={ix} session={session} />
        })}
      </main>
    </div>
  )
}

export default Home
