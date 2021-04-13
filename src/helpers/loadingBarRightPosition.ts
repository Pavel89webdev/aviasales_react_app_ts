function loadingBarRightPosition(
  ticketsCount: number,
  expectedTicketsCount: number,
  stop: boolean
): string {
  let right;

  if (ticketsCount === 0) {
    right = 100;
    return `${right}%`;
  }

  if (stop) {
    right = 0;
    return `${right}%`;
  }

  right = 100 - Math.floor((ticketsCount / expectedTicketsCount) * 100);

  return `${right}%`;
}

export default loadingBarRightPosition;
