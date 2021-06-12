export interface SessionSnapshot {
  mileage: number
  time: number
}

export interface Session {
  dateTime: Date
  difficulty: number
  snapshots: SessionSnapshot[]
}

const session2: Session = {
  dateTime: new Date('2021-06-12T12:00:00.000Z'),
  difficulty: 5,
  snapshots: [
    { mileage: 1.0, time: 215 },
    { mileage: 1.4, time: 300 },
    { mileage: 2.0, time: 427 },
    { mileage: 2.81, time: 600 },
    { mileage: 3.0, time: 639 },
    { mileage: 4.0, time: 852 },
    { mileage: 4.22, time: 900 },
    { mileage: 4.9, time: 1080 },
  ],
}

const session1: Session = {
  dateTime: new Date('2021-06-10T21:15:00.000Z'),
  difficulty: 3,
  snapshots: [
    { mileage: 1.0, time: 218 },
    { mileage: 1.38, time: 300 },
    { mileage: 2.0, time: 433 },
    { mileage: 2.78, time: 600 },
    { mileage: 3.0, time: 647 },
    { mileage: 4.0, time: 852 },
    { mileage: 4.2, time: 900 },
    { mileage: 4.91, time: 1080 },
  ],
}

export const sessions: Session[] = [session2, session1]
