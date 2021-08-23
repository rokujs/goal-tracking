const GOALS = [
  {
    _id: 13,
    name: 'goal 1',
    description: 'house task',
    timeEnd: '2021-08-25T00:00:00Z',
    tries: 3,
    todayDone: true,
    end: false,
    createAt: '2021',
    updateAt: '2022'
  },
  {
    _id: 23,
    name: 'goal 2',
    description: 'Wake up at 7:00 AM',
    timeEnd: 'Sun Aug 20 2021 17:35:42 GMT-0500 (Colombia Standard Time)',
    tries: 30,
    todayDone: false,
    end: false,
    createAt: '2021',
    updateAt: '2022'
  },
  {
    _id: 3,
    name: 'goal 3',
    description: 'Study programming',
    timeEnd: 'Sun Aug 16 2021 17:35:42 GMT-0500 (Colombia Standard Time)',
    tries: 10,
    todayDone: false,
    end: true,
    createAt: '2021',
    updateAt: '2022'
  }
]

export default async function GetGoals () {
  return GOALS
}
