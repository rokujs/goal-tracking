export default async function GetGoals () {
  const url = 'http://localhost:8080/goals/'
  const response = await fetch(url)
  const data = response.json()

  return data
}
