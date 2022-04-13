const URL = 'https://goal-tracking-backend-production.up.railway.app/api/user'

export default async function Register (data) {
  try {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }
    const response = await fetch(`${URL}`, requestOptions)
    const dataResponse = await response.json()

    if (response.status !== 201) throw new Error(dataResponse.message)

    return dataResponse
  } catch (error) {
    console.error({ error })
    throw new Error(error)
  }
}
