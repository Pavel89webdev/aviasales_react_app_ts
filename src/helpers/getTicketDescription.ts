import addZero from './addZero';

import { ITciketSegment, ITicketDescription } from '../interfaces';

function getTicketDescription(segment: ITciketSegment): ITicketDescription {
  const fromTo = `${segment.origin}-${segment.destination}`;

  const durationForwardWay = segment.duration;
  const hoursForwardWay = Math.floor(durationForwardWay / 60);
  const minutesForwardWay = durationForwardWay - hoursForwardWay * 60;
  const duration = `
    ${addZero(hoursForwardWay)}ч ${addZero(minutesForwardWay)}м 
  `;

  const startDate = new Date(segment.date);
  const departureTime = `
    ${addZero(startDate.getUTCHours())}:${addZero(startDate.getUTCMinutes())}
  `;
  const arraivalTimeData = new Date(
    +Date.parse(startDate.toString()) + durationForwardWay * 60 * 1000
  );
  const arraivalTime = `
    ${addZero(arraivalTimeData.getUTCHours())}:${addZero(
    arraivalTimeData.getUTCMinutes()
  )}`;

  const { stops } = segment;
  const renderStops = stops.join(', ');
  const stopsLength: number = stops.length;
  let stopsCount = '';

  if (stopsLength === 0) {
    stopsCount = 'без пересадок';
  }
  if (stopsLength === 1) {
    stopsCount = '1 пересадка';
  }
  if (stopsLength > 1) {
    stopsCount = `${stopsLength} пересадки`;
  }

  const description = {
    fromTo,
    duration,
    departureTime,
    arraivalTime,
    renderStops,
    stopsCount,
  };

  return description;
}

export default getTicketDescription;
