import SessionBlock from '~domains/session/components/SessionBlock'
import SessionRow from '~domains/session/components/SessionRow'
import { sessions } from '~domains/session/types'
import { date } from '~services/date'

const Mobile = () => {
  return (
    <div className='flex flex-col bg-blue-100 min-h-screen w-screen'>
      <header className='font-light p-2 text-white bg-indigo-900'>
        <p>Cyclitrack</p>
      </header>
      <main className='p-1 space-y-1'>
        {sessions.map((session, ix) => (
          <SessionRow key={ix} session={session} />
        ))}
      </main>
    </div>
  )
}

export default Mobile
