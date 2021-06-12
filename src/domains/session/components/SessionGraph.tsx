import { ResponsiveLine, Serie } from '@nivo/line'
import { useMemo } from 'react'
import type { Session } from '../types'
import { secondsToTime } from '../utils'

interface Props {
  averagePace: number
  session: Session
}

const SessionGraph = ({ averagePace, session }: Props) => {
  const data = useMemo<Serie[]>(() => {
    const finalTime = session.snapshots[session.snapshots.length - 1].time
    const mins = Math.floor(finalTime / 60) + 1
    return [
      {
        id: 'pace',
        data: [
          { x: 0, y: 0 },
          ...session.snapshots.map((snap) => ({
            x: snap.time,
            y: snap.mileage,
          })),
        ],
      },
      {
        id: 'average-pace',
        data: [...Array(mins).keys()].map((min) => {
          return { x: min * 60, y: (min / mins) * (finalTime / averagePace) }
        }),
      },
    ]
  }, [])

  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xFormat={(f) => secondsToTime(Number(f))}
      xScale={{ type: 'linear', min: 'auto', max: 'auto' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        reverse: false,
      }}
      yFormat=' >-.2f'
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Time (seconds)',
        legendOffset: 40,
        legendPosition: 'middle',
        format: (f) => secondsToTime(Number(f)),
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Distance (miles)',
        legendOffset: -40,
        legendPosition: 'middle',
      }}
      pointBorderWidth={0}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      useMesh={true}
    />
  )
}

export default SessionGraph
