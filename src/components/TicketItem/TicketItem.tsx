import classes from './TicketItem.module.sass';

import { ITicketItemProps } from '../../interfaces';

function TicketItem({
  price,
  imgUrl,
  forwardWayFromTo,
  forwardWayDepartureTime,
  forwardWayArraivalTime,
  forwardWayDuration,
  forwardWayStopsCount,
  forwardWayRenderStops,
  backWayFromTo,
  backWayDepartureTime,
  backWayArraivalTime,
  backWayDuration,
  backWayStopsCount,
  backWayRenderStops,
}: ITicketItemProps) {
  return (
    <li>
      <div className={classes.item}>
        <div className={classes.title}>
          <p className={classes.price}>{price}</p>
          <img src={imgUrl} alt="логотип компании" />
        </div>
        <div className={classes.description}>
          <div>
            <p className={classes['description-title']}>{forwardWayFromTo}</p>
            <p className={classes['description-text']}>
              {forwardWayDepartureTime} – {forwardWayArraivalTime}
            </p>
          </div>
          <div>
            <p className={classes['description-title']}>В пути</p>
            <p className={classes['description-text']}>{forwardWayDuration}</p>
          </div>
          <div>
            <p className={classes['description-title']}>
              {forwardWayStopsCount}
            </p>
            <p className={classes['description-text']}>
              {forwardWayRenderStops}
            </p>
          </div>
        </div>
        <div className={classes.description}>
          <div>
            <p className={classes['description-title']}>{backWayFromTo}</p>
            <p className={classes['description-text']}>
              {backWayDepartureTime} – {backWayArraivalTime}
            </p>
          </div>
          <div>
            <p className={classes['description-title']}>В пути</p>
            <p className={classes['description-text']}>{backWayDuration}</p>
          </div>
          <div>
            <p className={classes['description-title']}>{backWayStopsCount}</p>
            <p className={classes['description-text']}>{backWayRenderStops}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default TicketItem;
