import getTicketDescription from './getTicketDescription';

const mockTicketSegment = {
  // Код города (iata)
  origin: 'LED',
  // Код города (iata)
  destination: 'DOM',
  // Дата и время вылета туда
  date: '10-03-2021',
  // Массив кодов (iata) городов с пересадками
  stops: ['ITA', 'STB'],
  // Общее время перелёта в минутах
  duration: 1024,
};

const mockDescription = {
  fromTo: 'LED-DOM',
  duration: '17ч 04м',
  departureTime: '21:00',
  arraivalTime: '14:04',
  renderStops: 'ITA, STB',
  stopsCount: '2 пересадки',
};

describe('testing getTicketDescription function', () => {
  const result = getTicketDescription(mockTicketSegment);

  it('returns description', () => {
    expect(result).toEqual(mockDescription);
  });

  it('"fromTo" have format "FROM-TO"', () => {
    expect(result.fromTo).toBe(mockDescription.fromTo);
  });
});
