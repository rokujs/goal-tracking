export default async function GetGoals (token) {
  const url = 'http://localhost:8080/api/goals/'
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
  }
  const response = await fetch(url, requestOptions)
  const data = await response.json()

  return data
}
