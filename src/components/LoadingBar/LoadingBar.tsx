import { connect } from 'react-redux';
import classNames from 'classnames';
import { ILoadingBarProps, IRootState } from '../../interfaces';

import {
  getStop,
  getTicketsCount,
} from '../../redux/selectors/ticketsSelectors';

import classes from './LoadingBar.module.sass';

import EXPECTED_TICKETS_COUNT from '../../constants/expectedTicketsCount';

import loadingBarRightPosition from '../../helpers/loadingBarRightPosition';

function LoadingBar({ ticketsCount, stop }: ILoadingBarProps) {
  const renderClasses = classNames(
    classes['loading-total'],
    stop ? classes.complete : null
  );

  const right = loadingBarRightPosition(
    ticketsCount,
    EXPECTED_TICKETS_COUNT,
    stop
  );

  return (
    <div className={classes['loading-bar']}>
      <div className={renderClasses} style={{ right: `${right}` }}>
        <div className={classes['loading-progress']} />
      </div>
    </div>
  );
}

const mapStateToProps = (state: IRootState): ILoadingBarProps => ({
  stop: getStop(state),
  ticketsCount: getTicketsCount(state),
});

export default connect(mapStateToProps)(LoadingBar);
