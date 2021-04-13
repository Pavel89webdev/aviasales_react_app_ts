import { FilterType } from '../interfaces';

const FILTERS: Array<FilterType> = [
  {
    label: 'Все',
    id: 'all',
  },
  {
    label: 'Без пересадок',
    id: 0,
  },
  {
    label: '1 пересадка',
    id: 1,
  },
  {
    label: '2 пересадки',
    id: 2,
  },
  {
    label: '3 пересадки',
    id: 3,
  },
];

// order in array is matter!

export default FILTERS;
