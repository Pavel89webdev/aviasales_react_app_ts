import {
  GET_SEARCH_RESULTS,
  FETCHING_IS_ON,
  SearchTicketsActionType,
  IsFetchingOnType,
} from '../actions/ticketsActions';
import mergeTickets from '../../helpers/mergeTickets';

import { ITicketsState } from '../../interfaces';

const initialState: ITicketsState = {
  isFetching: false,
  stop: true,
  ticketsCount: 0,
  ticketsSortedByStops: {},
};

function tickets(
  state = initialState,
  action: SearchTicketsActionType | IsFetchingOnType
) : ITicketsState {
  switch (action.type) {
    case GET_SEARCH_RESULTS: {
      const mergedTickets = mergeTickets(
        state.ticketsSortedByStops,
        action.ticketsSortedByStops
      );

      return {
        ticketsSortedByStops: mergedTickets,
        isFetching: !action.stop,
        stop: action.stop,
        ticketsCount: state.ticketsCount + action.ticketsCount,
      };
    }

    case FETCHING_IS_ON:
      return {
        ...state,
        isFetching: true,
      };
    default:
      return state;
  }
}

export default tickets;
