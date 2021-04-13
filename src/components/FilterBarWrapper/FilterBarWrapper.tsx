import React from 'react';

import FilterBar from '../../containers/FilterBar';

import classes from './FilterBarWrapper.module.sass';

function FilterBarWrapper() {
  return (
    <div className={classes.wrapper}>
      <div className={classes['filter-bar']}>
        <div className={classes.title}>Количество пересадок</div>
        <form action="#" className={classes['filter-form']}>
          <ul className={classes.list}>
            <FilterBar />
          </ul>
        </form>
      </div>
    </div>
  );
}

export default FilterBarWrapper;
