export default function Time (date) {
  const now = new Date().getTime()
  const end = new Date(date).getTime()

  const diff = end - now
  const timeRemaining = Math.round(diff / (1000 * 60 * 60 * 24))

  console.log('Date')
  console.log(timeRemaining)
  console.log(now)
  console.log(end)

  return timeRemaining
}
