import type { Session, SessionSnapshot } from './types'

export const getSessionDistance = (session: Session) => {
  const lastSnapshot = session.snapshots[session.snapshots.length - 1]
  return lastSnapshot.mileage
}

export const getSessionFinalTime = (session: Session) => {
  const lastSnapshot = session.snapshots[session.snapshots.length - 1]
  return lastSnapshot.time
}

export const getRawSessionPace = (session: Session) => {
  const snapshot = session.snapshots[session.snapshots.length - 1]
  return Math.round(snapshot.time / snapshot.mileage)
}

export const getRawPaceFromSessions = (sessionSnapshots: Session[]) => {
  const totalSeconds = sessionSnapshots.reduce(
    (prev, session) => prev + getSessionFinalTime(session),
    0
  )
  const totalDistance = sessionSnapshots.reduce(
    (prev, session) => prev + getSessionDistance(session),
    0
  )

  return Math.floor(totalSeconds / totalDistance)
}

export const getPaceFromSessions = (sessionSnapshots: Session[]) => {
  return secondsToTime(getRawPaceFromSessions(sessionSnapshots))
}

export const getSessionDuration = (
  session: Session,
  format: 'long' | 'short'
) => {
  const lastSnapshot = session.snapshots[session.snapshots.length - 1]
  const totalSeconds = lastSnapshot.time

  return secondsToDuration(totalSeconds, format)
}

export const secondsToDuration = (
  totalSeconds: number,
  format: 'short' | 'long'
) => {
  const { hours, minutes, seconds } = {
    hours: Math.floor(totalSeconds / 3600),
    minutes: Math.floor(totalSeconds / 60) % 60,
    seconds: totalSeconds % 60,
  }

  if (format === 'short') {
    return [`${hours}h`, `${minutes}m`, `${seconds}s`]
      .filter((s) => !s.startsWith('0'))
      .join(' ')
  }

  const parts = [
    `${hours} hour${hours > 1 ? 's' : ''}`,
    `${minutes} minute${minutes > 1 ? 's' : ''}`,
    `${seconds} second${seconds > 1 ? 's' : ''}`,
  ].filter((s) => !s.startsWith('0'))

  return parts.length === 1
    ? parts[0]
    : parts.slice(0, parts.length - 1).join(', ') +
        ' & ' +
        parts[parts.length - 1]
}

export const secondsToTime = (totalSeconds: number) => {
  const { hours, minutes, seconds } = {
    hours: Math.floor(totalSeconds / 3600),
    minutes: Math.floor(totalSeconds / 60) % 60,
    seconds: totalSeconds % 60,
  }

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
    2,
    '0'
  )}:${String(seconds).padStart(2, '0')}`
}

export const getSnapshotTime = (snapshot: SessionSnapshot) => {
  return secondsToTime(snapshot.time)
}

export const getSnapshotPace = (snapshot: SessionSnapshot) => {
  const totalSeconds = Math.round(snapshot.time / snapshot.mileage)
  return secondsToTime(totalSeconds)
}

export const getLastSnapshot = (session: Session): SessionSnapshot => {
  return session.snapshots[session.snapshots.length - 1]
}

export const getSessionSpeed = (session: Session) => {
  const last = getLastSnapshot(session)
  return last.mileage / (last.time / 3600)
}

export const getAverageSessionsSpeed = (sessions: Session[]) => {
  const snapshots = sessions.map(getLastSnapshot)
  const mileage = snapshots.reduce((prev, curr) => prev + curr.mileage, 0)
  const time = snapshots.reduce((prev, curr) => prev + curr.time, 0)

  return mileage / (time / 3600)
}
