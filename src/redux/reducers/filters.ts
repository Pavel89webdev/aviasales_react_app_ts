import {
  CHANGE_FILTER_ID,
  ChangeFilterIdActionType,
} from '../actions/filterActions';
import filterChecker from '../../helpers/filterChecker';
import { FilterStateType } from '../../interfaces';

const initialState: FilterStateType = {
  all: true,
  0: true,
  1: true,
  2: true,
  3: true,
};

const filters = (
  state: FilterStateType = initialState,
  action: ChangeFilterIdActionType
): FilterStateType => {
  switch (action.type) {
    case CHANGE_FILTER_ID: {
      const res = filterChecker(state, action.filterId);
      return res;
    }

    default:
      return state;
  }
};

export default filters;
