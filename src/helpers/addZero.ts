function addZero(num: number): string {
  if (num < 10) {
    return `0${num}`;
  }
  return `${num}`;
}

export default addZero;
