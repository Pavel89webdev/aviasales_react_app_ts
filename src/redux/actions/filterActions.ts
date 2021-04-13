import { FilterIdsType } from '../../interfaces';

export const CHANGE_FILTER_ID = 'CHANGE_FILTER_ID';

export type ChangeFilterIdActionType = {
  type: typeof CHANGE_FILTER_ID;
  filterId: FilterIdsType;
};

export const changeFilterId = (
  id: FilterIdsType = 'all'
): ChangeFilterIdActionType => ({
  type: CHANGE_FILTER_ID,
  filterId: id,
});
