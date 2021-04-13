import React from 'react';
import classNames from 'classnames';

import classes from './Button.module.sass';

import { IButtonProps } from '../../interfaces';

function Button({ label, onClick, type, btnClasses }: IButtonProps) {
  const resultClasses = classNames(
    classes.button,
    btnClasses.map((item) => classes[item])
  );

  return (
    <button
      type={type === 'button' ? 'button' : 'submit'}
      className={resultClasses}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
