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
  const url = `http://localhost:8080/goal/${id}`
  const response = await fetch(url)
  const data = response.json()

  return data
}
