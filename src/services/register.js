const URL = 'https://goal-tracking-backend-production.up.railway.app/api/user'

export default async function Register (data) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }
  const response = await fetch(`${URL}`, requestOptions)
  const dataResponse = await response.json()

  return dataResponse
}
