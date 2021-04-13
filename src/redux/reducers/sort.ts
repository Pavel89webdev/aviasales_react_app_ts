import { CHANGE_SORT_ID, ChangeSortIdActionType } from '../actions/sortActions';
import SORT_TABS from '../../constants/sortTabs';

import { SortIdsType } from '../../interfaces';

const initaialState: SortIdsType = SORT_TABS[0].id;

function reduceSort(
  state = initaialState,
  action: ChangeSortIdActionType
): SortIdsType {
  switch (action.type) {
    case CHANGE_SORT_ID:
      return action.sortId;
    default:
      return state;
  }
}

export default reduceSort;
