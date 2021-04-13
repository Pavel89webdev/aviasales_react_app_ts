import { IRootState, ISortTickets } from '../../interfaces';

export const getTickets = (state: IRootState): ISortTickets =>
  state.tickets.ticketsSortedByStops;

export const getFetching = (state: IRootState) => state.tickets.isFetching;

export const getStop = (state: IRootState) => state.tickets.stop;

export const getTicketsCount = (state: IRootState) =>
  state.tickets.ticketsCount;
