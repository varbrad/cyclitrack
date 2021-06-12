import React from 'react'

interface Props {
  title: React.ReactChild
  records: React.ReactChild[]
}

const Leaderboard = ({ title, records }: Props) => {
  return (
    <div className='p-3 bg-blue-200 rounded-md'>
      <h3 className='font-black text-blue-600 mb-1'>{title}</h3>
      <div className='flex flex-col gap-1 text-sm'>
        {records.map((record, ix) => {
          return (
            <div className='flex flex-row' key={ix}>
              <div className='rounded-md px-2 py-1 bg-blue-100 font-black'>
                {ix + 1}.
              </div>
              <div className='px-2 py-1 font-black'>{record}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Leaderboard
