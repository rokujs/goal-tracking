export default async function getHistory ({ id }) {
  const url = `https://goal-tracking-backend-production.up.railway.app/api/goal/${id}`
  const response = await fetch(url)
  const data = response.json()

  return data
}
