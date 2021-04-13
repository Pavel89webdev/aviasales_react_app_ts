import React, { useState, useMemo } from 'react';
import { connect } from 'react-redux';

import applyFilters from '../../helpers/applyFilters';
import sortTickets from '../../helpers/sortTickets';

import { getSearchResults } from '../../redux/actions/ticketsActions';

import TicketItemContainer from '../TicketItemContainer';
import NextResultsButton from '../../components/NextResultsButton';
import NoResultMessage from '../../components/NoResultMessage';

import classes from './TicketsList.module.sass';

import {
  getTickets,
  getFetching,
  getStop,
  getTicketsCount,
} from '../../redux/selectors/ticketsSelectors';
import { getCurrentSort } from '../../redux/selectors/sortSelectors';
import { getCurrentFilters } from '../../redux/selectors/filtersSelectors';

import { ITicketsListProps, ITicket, IRootState } from '../../interfaces';

const TicketsList = ({
  tickets,
  sortById,
  activeFilterId,
  getTicketsFromService,
  isFetching,
  stop,
  ticketsCount,
}: ITicketsListProps) => {
  const [itemsToshow, addItems] = useState(5);

  if (ticketsCount === 0 && !isFetching && stop) {
    getTicketsFromService();
  }

  const renderTickets = useMemo(() => applyFilters(tickets, activeFilterId), [
    tickets,
    activeFilterId,
  ]);

  const sortList = useMemo(() => sortTickets(renderTickets, sortById), [
    renderTickets,
    sortById,
  ]);

  const ticketItemsList = sortList.reduce(
    (acc: React.ReactElement[], ticket: ITicket, index: number) => {
      if (index < itemsToshow) {
        const key =
          ticket.price +
          ticket.carrier +
          ticket.segments[0].date +
          ticket.segments[1].date;
        return [...acc, <TicketItemContainer ticket={ticket} key={key} />];
      }
      return acc;
    },
    []
  );

  return (
    <ul className={classes.list}>
      {ticketItemsList.length ? ticketItemsList : <NoResultMessage />}
      {ticketItemsList.length ? (
        <li>
          <NextResultsButton
            onAddItems={() => {
              addItems(itemsToshow + 5);
            }}
          />
        </li>
      ) : null}
    </ul>
  );
};

const mapStateToProps = (state: IRootState) => ({
  tickets: getTickets(state),
  sortById: getCurrentSort(state),
  activeFilterId: getCurrentFilters(state),
  isFetching: getFetching(state),
  stop: getStop(state),
  ticketsCount: getTicketsCount(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  getTicketsFromService: () => getSearchResults(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketsList);
