export default async function getHistory ({ id, token }) {
  try {
    const url = `https://goal-tracking-backend-production.up.railway.app/api/goal/${id}`
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }
    const response = await fetch(url, requestOptions)
    const data = await response.json()

    if (response.status !== 200) {
      throw new Error(data.message)
    }

    return data
  } catch (error) {
    throw new Error(error.message)
  }
}
