import FILTERS from '../constants/filters';
import { ITicket, ISortTickets, FilterIdsType } from '../interfaces';

function applyFilters(
  tickets: ISortTickets,
  activeFilterId: FilterIdsType[]
): ITicket[] {
  const ticketsEntries = Object.entries(tickets);

  if (activeFilterId.includes(FILTERS[0].id)) {
    const renderTickets = ticketsEntries.reduce(
      (acc: ITicket[], [, ticketArr]) => {
        acc.push(...ticketArr);
        return acc;
      },
      []
    );
    return renderTickets;
  }

  const renderTickets = ticketsEntries.reduce(
    (acc: ITicket[], [key, ticketsArr]) => {
      const keyToNum = +key;
      if (activeFilterId.includes(keyToNum as FilterIdsType)) {
        acc.push(...ticketsArr);
      }
      return acc;
    },
    []
  );

  return renderTickets;
}

export default applyFilters;
