import { IRootState, SortIdsType } from '../../interfaces';
// eslint-disable-next-line import/prefer-default-export
export const getCurrentSort = (state: IRootState): SortIdsType => state.sort;
