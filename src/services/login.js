const URL = 'http://localhost:8080/api/login'

export default async function login (data) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }
  const response = await fetch(`${URL}`, requestOptions)
  const dataResponse = response.json()

  return dataResponse
}
