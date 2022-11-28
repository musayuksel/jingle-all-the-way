import { santaCurrentPosition, findNextStop } from './santaCurrentPosition';
import routes from './routes.json';

describe('findNextStop function', () => {
  it('should return the first stop', () => {
    const time = new Date('2022-12-24T20:59:00.000Z').getTime();
    const nextStop = findNextStop(time, routes);
    expect(nextStop).toEqual(routes[0]);
  });
  it('should return the last stop', () => {
    const time = new Date('2022-12-25T07:00:00.000Z').getTime();
    const nextStop = findNextStop(time, routes);
    const lastStop = routes[routes.length - 1];
    expect(nextStop).toEqual(lastStop);
  });
});

describe('santaCurrentPosition function', () => {
  it('should return the Arriving in Egvekinot in 1 minutes', () => {
    const nextStop = santaCurrentPosition('2022-12-24T20:59');
    expect(nextStop).toEqual('Arriving in Egvekinot in 1 minutes');
  });

  it('should return the Arriving in Reykjavík in 10 minutes', () => {
    const nextStop = santaCurrentPosition('Sun Dec 25 2022 02:20:00 GMT+0000');
    expect(nextStop).toEqual('Arriving in Reykjavík in 10 minutes');
  });

  describe('when the time is after the last stop', () => {
    it('should return the Santa has finished his journey for this year :)', () => {
      const nextStop = santaCurrentPosition('2022-12-25T07:50');
      expect(nextStop).toEqual(
        'Santa has finished his journey for this year :)'
      );
    });
  });
});
