export default async function getHistory ({ id, token }) {
  const url = `https://goal-tracking-backend-production.up.railway.app/api/goal/${id}`
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
  }
  const response = await fetch(url, requestOptions)
  const data = response.json()

  return data
}
