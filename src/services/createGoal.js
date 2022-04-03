export async function CreateGoal ({ data, token }) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  }

  const res = await fetch('http://localhost:8080/api/goals/add', requestOptions)

  return res
}
