import classes from './FilterCheckbox.module.sass';

import { IFilterCheckboxProps } from '../../interfaces';

function FilterCheckbox({
  id = 'all',
  label,
  checked,
  changeFilterId,
}: IFilterCheckboxProps) {
  const stringId = id.toString();

  return (
    <li className={classes['list-item']} key={id}>
      <input
        checked={checked}
        type="checkbox"
        id={stringId}
        className={classes.checkbox}
        onChange={() => {
          changeFilterId(id);
        }}
      />
      <label htmlFor={stringId} className={classes.label}>
        {label}
      </label>
    </li>
  );
}

export default FilterCheckbox;
