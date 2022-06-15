export function convertTime(time) {
  return new Date(time).toLocaleDateString("en-DE", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  })
}
