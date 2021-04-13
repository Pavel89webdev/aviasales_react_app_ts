import SearchService from '../../services/SearchService';
import sortTicketsByStops from '../../helpers/sortTicketsByStops';
import { ISortTicketsByStops } from '../../interfaces';

export const FETCHING_IS_ON = 'FETCHING_IS_ON';
export const GET_SEARCH_RESULTS = 'GET_SEARCH_RESULTS';

export type IsFetchingOnType = {
  type: typeof FETCHING_IS_ON;
};

export const isFetchingOn = (): IsFetchingOnType => ({
  type: FETCHING_IS_ON,
});

export interface SearchTicketsActionType extends ISortTicketsByStops {
  type: typeof GET_SEARCH_RESULTS;
  stop: boolean;
}

export const getSearchResults = async (dispatch: any): Promise<any> => {
  dispatch(isFetchingOn());

  try {
    const searchResult = await SearchService.getSearchResult();
    const { ticketsCount, ticketsSortedByStops } = sortTicketsByStops(
      searchResult
    );

    const action: SearchTicketsActionType = {
      type: GET_SEARCH_RESULTS,
      ticketsSortedByStops,
      ticketsCount,
      stop: searchResult.stop,
    };
    if (!searchResult.stop) {
      dispatch(action);
      return getSearchResults(dispatch);
    }
    return dispatch(action);
  } catch (e) {
    // непонтяно как обрабатывать ошибку, так что пока ловим и прокидывем дальше
    throw new Error(e);
  }
};
