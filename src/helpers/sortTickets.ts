import SORT_TABS from '../constants/sortTabs';

import { SortIdsType, ITicket } from '../interfaces';

function sortTickets(items: ITicket[], sortId: SortIdsType): ITicket[] {
  let sortList: ITicket[] = [];

  if (items && sortId === SORT_TABS[0].id) {
    sortList = items.sort((prev, next) => prev.price - next.price);
  }

  if (items && sortId === SORT_TABS[1].id) {
    sortList = items.sort(
      (prev, next) =>
        prev.segments[0].duration +
        prev.segments[1].duration -
        (next.segments[0].duration + next.segments[1].duration)
    );
  }

  if (items && sortId === SORT_TABS[2].id) {
    sortList = items.sort(
      (prev, next) =>
        prev.segments[0].duration +
        prev.segments[1].duration +
        prev.price -
        (next.segments[0].duration + next.segments[1].duration + next.price)
    );
  }
  return sortList;
}

export default sortTickets;
