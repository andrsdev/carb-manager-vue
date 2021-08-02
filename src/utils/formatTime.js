export function formatTime(minutes) {
  if (minutes <= 60) return `${minutes} min`;

  const h = Math.trunc(minutes / 60);
  const min = minutes % 60;

  return `${h} h ${min} min`;
}
