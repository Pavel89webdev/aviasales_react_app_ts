import FILTERS from '../constants/filters';

import { FilterIdsType, FilterStateType } from '../interfaces';

function filterChecker(
  currentFiltersId: FilterStateType,
  filterId: any
): FilterStateType {
  const newFilters = FILTERS.reduce((acc: any, filter) => {
    acc[filter.id] = false;
    return acc;
  }, {});
  const filterAll = FILTERS[0].id;
  let coincidence = 0;

  FILTERS.forEach((filter, index) => {
    const currrentFilterId: FilterIdsType = FILTERS[index].id;

    if (filterId === filterAll && !currentFiltersId.all) {
      coincidence++;
      newFilters[currrentFilterId] = true;
      return;
    }

    if (filterId === filterAll && currentFiltersId.all) {
      newFilters[currrentFilterId] = false;
      return;
    }

    if (filterId === currrentFilterId && currentFiltersId[currrentFilterId]) {
      newFilters[currrentFilterId] = false;
      newFilters.all = false;
      coincidence -= 2;
      return;
    }

    if (filterId === currrentFilterId || currentFiltersId[currrentFilterId]) {
      coincidence++;
      newFilters[currrentFilterId] = true;
    }
    if (coincidence >= FILTERS.length - 1) {
      newFilters.all = true;
    }
  });

  return newFilters;
}

export default filterChecker;
