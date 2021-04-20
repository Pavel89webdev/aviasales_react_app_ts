function addZero(num = 0): string {
  if (num < 10) {
    return `0${num}`;
  }
  return `${num}`;
}

export default addZero;
