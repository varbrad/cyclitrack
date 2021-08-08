export interface SessionSnapshot {
  mileage: number
  time: number
}

export interface Session {
  dateTime: Date
  difficulty: number
  snapshots: SessionSnapshot[]
}

const session4: Session = {
  dateTime: new Date('2021-08-02T21:11:00.000Z'),
  difficulty: 5,
  snapshots: [
    { mileage: 1.00, time: 211 },
    { mileage: 2.00, time: 425 },
    { mileage: 3.00, time: 639 },
    { mileage: 4.00, time: 840 },
    { mileage: 4.26, time: 900 },
    { mileage: 4.89, time: 1080 },
  ]
}

const session3: Session = {
  dateTime: new Date('2021-06-13T07:17:00.000Z'),
  difficulty: 5,
  snapshots: [
    { mileage: 0.27, time: 60 }, // 1:00 - 0.27 mi
    { mileage: 0.55, time: 120 }, // 2:00 - 0.55 mi
    { mileage: 0.84, time: 180 }, // 3:00 - 0.84 mi
    { mileage: 1.0, time: 213 }, // 3:33 - 1.00 mi
    { mileage: 1.13, time: 240 }, // 4:00 - 1.13 mi
    { mileage: 1.41, time: 300 }, // 5:00 - 1.41 mi
    { mileage: 1.69, time: 360 }, // 6:00 - 1.69 mi
    { mileage: 1.98, time: 420 }, // 7:00 - 1.98 mi
    { mileage: 2.0, time: 425 }, // 7:05 - 2.00 mi
    { mileage: 2.26, time: 480 }, // 8:00 - 2.26 mi
    { mileage: 2.54, time: 540 }, // 9:00 - 2.54 mi
    { mileage: 2.82, time: 600 }, // 10:00 - 2.82 mi
    { mileage: 3.0, time: 638 }, // 10:38 - 3.00 mi
    { mileage: 3.1, time: 660 }, // 11:00 - 3.10 mi
    { mileage: 3.39, time: 720 }, // 12:00 - 3.39 mi
    { mileage: 3.67, time: 780 }, // 13:00 - 3.67 mi
    { mileage: 3.95, time: 840 }, // 14:00 - 3.95 mi
    { mileage: 4.0, time: 850 }, // 14:10 - 4.00 mi
    { mileage: 4.24, time: 900 }, // 15:00 - 4.24 mi
    { mileage: 4.51, time: 960 }, // 16:00 - 4.51 mi
    { mileage: 4.79, time: 1020 }, // 17:00 - 4.79 mi
    { mileage: 5.0, time: 1064 }, // 17:44 - 5.00 mi
    { mileage: 5.07, time: 1080 }, // 18:00 - 5.07 mi
    { mileage: 5.4, time: 1150 }, // 19:10 - 5.40 mi
    { mileage: 5.63, time: 1200 }, // 20:00 - 5.63 mi
    { mileage: 5.91, time: 1260 }, // 21:00 - 5.91 mi
    { mileage: 6.0, time: 1279 }, // 21:19 - 6.00 mi
    { mileage: 6.18, time: 1320 }, // 22:00 - 6.18 mi
    { mileage: 6.46, time: 1380 }, // 23:00 - 6.46 mi
    { mileage: 6.74, time: 1440 }, // 24:00 - 6.74 mi
    { mileage: 7.0, time: 1495 }, // 24:55 - 7.00 mi
    { mileage: 7.02, time: 1500 }, // 25:00 - 7.02 mi
    { mileage: 7.3, time: 1560 }, // 26:00 - 7.30 mi
    { mileage: 7.58, time: 1620 }, // 27:00 - 7.58 mi
    { mileage: 7.86, time: 1680 }, // 28:00 - 7.86 mi
    { mileage: 8.0, time: 1710 }, // 28:30 - 8.00 mi
    { mileage: 8.14, time: 1740 }, // 29:00 - 8.14 mi
    { mileage: 8.44, time: 1800 }, // 30:00 - 8.44 mi
    { mileage: 8.77, time: 1890 }, // 31:30 - 8.77 mi
    { mileage: 8.88, time: 1920 }, // 32:00 - 8.88 mi
    { mileage: 9.0, time: 1956 }, // 32:36 - 9.00 mi
    { mileage: 9.08, time: 1980 }, // 33:00 - 9.08 mi
    { mileage: 9.26, time: 2040 }, // 34:00 - 9.26 mi
    { mileage: 9.45, time: 2100 }, // 35:00 - 9.45 mi
  ],
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

export const sessions: Session[] = [session4, session3, session2, session1]
