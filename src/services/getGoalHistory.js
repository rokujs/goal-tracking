const GOALS = {
  _id: 1,
  title: 'Learn Python',
  description: 'I want learn to python framework',
  tries: [
    {
      start: 'Thu Aug 26 2021 18:45:29 GMT-0500 (Colombia Standard Time)',
      end: 'Thu Aug 26 2022 18:45:29 GMT-0500 (Colombia Standard Time)'
    },
    {
      start: 'Thu Aug 26 2021 18:45:29 GMT-0500 (Colombia Standard Time)',
      end: 'Thu Aug 26 2022 18:45:29 GMT-0500 (Colombia Standard Time)'
    },
    {
      start: 'Thu Aug 26 2021 18:45:29 GMT-0500 (Colombia Standard Time)',
      end: 'Thu Aug 26 2022 18:45:29 GMT-0500 (Colombia Standard Time)'
    }
  ]
}

export default async function getHistory ({ id }) {
  return GOALS
}
