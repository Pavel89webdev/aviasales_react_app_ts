import SORT_TABS from '../../constants/sortTabs';
import { SortIdsType } from '../../interfaces';

export const CHANGE_SORT_ID = 'CHANGE_SORT_ID';

export type ChangeSortIdActionType = {
  type: typeof CHANGE_SORT_ID;
  sortId: SortIdsType;
};

export const changeSortId = (
  id: SortIdsType = SORT_TABS[0].id
): ChangeSortIdActionType => ({
  type: CHANGE_SORT_ID,
  sortId: id,
});
