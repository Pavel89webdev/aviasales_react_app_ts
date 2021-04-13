import React from 'react';
import { connect } from 'react-redux';

import { changeFilterId } from '../../redux/actions/filterActions';
import { getCurrentFilters } from '../../redux/selectors/filtersSelectors';

import FilterCheckbox from '../../components/FilterCheckbox';

import FILTERS from '../../constants/filters';

import { IFilterBarProps, IRootState, FilterIdsType } from '../../interfaces';

function FilterBar({ activeFiltersId, onChangeFilterId }: IFilterBarProps) {
  const renderFilters = FILTERS.map((filter) => (
    <FilterCheckbox
      id={filter.id}
      label={filter.label}
      checked={activeFiltersId.includes(filter.id)}
      changeFilterId={onChangeFilterId}
      key={filter.id}
    />
  ));

  return <>{renderFilters}</>;
}

const mapStateToProps = (state: IRootState) => ({
  activeFiltersId: getCurrentFilters(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  onChangeFilterId: (id: FilterIdsType) => dispatch(changeFilterId(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);
