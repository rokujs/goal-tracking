export default function Time (date) {
  const now = new Date().getTime()
  const end = new Date(date).getTime()

  const diff = end - now
  const timeRemaining = Math.round(diff / (1000 * 60 * 60 * 24))

  return timeRemaining
}

export function TimeDiff (startDate, endDate) {
  const now = new Date(startDate).getTime()
  const end = new Date(endDate).getTime()

  const diff = end - now
  const timeRemaining = Math.ceil(diff / (1000 * 60 * 60 * 24))

  return timeRemaining
}

export function StartDay (startDate) {
  const date = new Date(startDate)
  const day = date.toLocaleString('default', { weekday: 'long' })
  const numberDay = date.getDate()
  const month = date.toLocaleString('default', { month: 'long' })
  const year = date.getFullYear()

  return [day, numberDay, month, year]
}
