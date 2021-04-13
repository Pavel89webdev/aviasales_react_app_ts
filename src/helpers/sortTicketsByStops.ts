import { ISortTicketsByStops, ISearchResult, ITicket } from '../interfaces';

function sortTicketsByStops(searchResult: ISearchResult): ISortTicketsByStops {
  const result: ISortTicketsByStops = searchResult.tickets.reduce(
    (acc: ISortTicketsByStops, ticket: ITicket) => {
      acc.ticketsCount++;

      const stops = Math.max(
        0,
        ticket.segments[0].stops.length,
        ticket.segments[1].stops.length
      );

      if (acc.ticketsSortedByStops[stops] === undefined) {
        acc.ticketsSortedByStops[stops] = [];
      }

      acc.ticketsSortedByStops[stops].push(ticket);

      return acc;
    },
    {
      ticketsCount: 0,
      ticketsSortedByStops: {},
    }
  );

  return result;
}

export default sortTicketsByStops;
