const URL = 'http://localhost:8080/api/user'

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
