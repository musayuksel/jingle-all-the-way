import routes from './routes.json';
export function santaCurrentPosition(timeStringFormat) {
  const timeFormat = new Date(timeStringFormat).getTime();

  const nextStop =
    findNextStop(timeFormat, routes) || routes[routes.length - 1];
  const remainingMinuteToNextStop =
    (new Date(nextStop?.time).getTime() - timeFormat) / 1000 / 60;
  return remainingMinuteToNextStop > 0
    ? `Arriving in ${nextStop?.city} in ${remainingMinuteToNextStop} minutes`
    : 'Santa has finished his journey for this year :)';
}

export function findNextStop(time, routes) {
  return routes.find((route) => {
    const routeTime = new Date(route.time).getTime();
    return routeTime > time;
  });
}
