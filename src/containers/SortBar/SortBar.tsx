import React from 'react';
import { connect } from 'react-redux';

import Button from '../../components/Button';

import { changeSortId } from '../../redux/actions/sortActions';
import SORT_TABS from '../../constants/sortTabs';
import { getCurrentSort } from '../../redux/selectors/sortSelectors';

import classes from './SortBar.module.sass';

import { ISortBarProps, IRootState, SortIdsType } from '../../interfaces';

function SortBar({ activeTab, onChangeSortId }: ISortBarProps) {
  const tabs = () =>
    SORT_TABS.map((tab) => {
      const btnClasses: string[] = [
        'tab',
        activeTab === tab.id ? 'tab-active' : '',
      ];
      return (
        <Button
          type="button"
          btnClasses={btnClasses}
          onClick={() => {
            onChangeSortId(tab.id);
          }}
          key={tab.id}
          label={tab.label as string}
        />
      );
    });

  return <div className={classes.wrapper}>{tabs()}</div>;
}

const mapStateToProps = (state: IRootState) => ({
  activeTab: getCurrentSort(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  onChangeSortId: (id: SortIdsType) => dispatch(changeSortId(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SortBar);
