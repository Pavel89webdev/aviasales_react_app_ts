import Button from '../Button';

import { INextResultsButtonProps } from '../../interfaces';

function NextResultsButton({ onAddItems }: INextResultsButtonProps) {
  return (
    <Button
      btnClasses={['next-button']}
      type="button"
      onClick={onAddItems}
      label="Показать еще 5 билетов!"
    />
  );
}

export default NextResultsButton;
