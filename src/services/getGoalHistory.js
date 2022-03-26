export default async function getHistory ({ id }) {
  const url = `http://localhost:8080/api/goal/${id}`
  const response = await fetch(url)
  const data = response.json()

  return data
}
