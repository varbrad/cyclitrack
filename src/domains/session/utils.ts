import type { Session, SessionSnapshot } from './types'

export const getSessionDistance = (session: Session) => {
  const lastSnapshot = session.snapshots[session.snapshots.length - 1]
  return lastSnapshot.mileage
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
