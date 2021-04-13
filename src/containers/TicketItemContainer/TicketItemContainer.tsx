import React from 'react';

import getTicketDescription from '../../helpers/getTicketDescription';

import TicketItem from '../../components/TicketItem';

import { ITicketITemContainerProps } from '../../interfaces';

function TicketItemContainer({ ticket }: ITicketITemContainerProps) {
  const price = `${ticket.price} р.`;

  const forwardWay = getTicketDescription(ticket.segments[0]);
  const backWay = getTicketDescription(ticket.segments[1]);

  const imgUrl = `http://pics.avs.io/99/36/${ticket.carrier}.png`;

  return (
    <TicketItem
      price={price}
      imgUrl={imgUrl}
      forwardWayFromTo={forwardWay.fromTo}
      forwardWayDepartureTime={forwardWay.departureTime}
      forwardWayArraivalTime={forwardWay.arraivalTime}
      forwardWayDuration={forwardWay.duration}
      forwardWayStopsCount={forwardWay.stopsCount}
      forwardWayRenderStops={forwardWay.renderStops}
      backWayFromTo={backWay.fromTo}
      backWayDepartureTime={backWay.departureTime}
      backWayArraivalTime={backWay.arraivalTime}
      backWayDuration={backWay.duration}
      backWayStopsCount={backWay.stopsCount}
      backWayRenderStops={backWay.renderStops}
    />
  );
}

export default TicketItemContainer;
