const URL = 'http://localhost:8080/api/login'

export default async function login (data) {
  try {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }
    const response = await fetch(`${URL}`, requestOptions)
    const dataResponse = await response.json()

    if (response.status !== 200) throw new Error(dataResponse.error)

    return dataResponse
  } catch (error) {
    console.error(error)
  }
}
