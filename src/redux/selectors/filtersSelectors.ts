import { createSelector } from 'reselect';
import { IRootState, FilterStateType, FilterIdsType } from '../../interfaces';

const getFilters = (state: IRootState): FilterStateType => state.filters;

// eslint-disable-next-line import/prefer-default-export
export const getCurrentFilters = createSelector([getFilters], (filters) => {
  const filtersEntries = Object.entries(filters);

  const activeFiltersId: FilterIdsType[] = filtersEntries.reduce(
    (acc: FilterIdsType[], [filterId, isActive]) => {
      if (isActive) {
        if (Number.parseInt(filterId, 10) >= 0) {
          const numberfilterId = Number.parseInt(filterId, 10);
          acc.push(numberfilterId as FilterIdsType);
          return acc;
        }
        acc.push(filterId as FilterIdsType);
      }
      return acc;
    },
    []
  );

  return activeFiltersId;
});
