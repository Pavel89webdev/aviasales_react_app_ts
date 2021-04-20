import loadingBarRightPosition from './loadingBarRightPosition';
import EXPECTED_TICKETS_COUNT from '../constants/expectedTicketsCount';

const mockTicketsCount = EXPECTED_TICKETS_COUNT;

describe('testing function of loading bar position', () => {
  it('return "100%" when tickets count === 0', () => {
    expect(loadingBarRightPosition(0, mockTicketsCount, false)).toBe('100%');
  });

  it('return "0%" when stop === true, and tickets count > 0', () => {
    expect(loadingBarRightPosition(10, mockTicketsCount, true)).toBe('0%');
  });

  it('return "0%" when, tickets count === expect tickets count', () => {
    expect(
      loadingBarRightPosition(mockTicketsCount, mockTicketsCount, false)
    ).toBe('0%');
  });

  it('return "50%" when, tickets count === half of expect tickets count', () => {
    expect(
      loadingBarRightPosition(mockTicketsCount / 2, mockTicketsCount, false)
    ).toBe('50%');
  });

  it('return "67%" when, tickets count === expect tickets count / 3', () => {
    expect(
      loadingBarRightPosition(mockTicketsCount / 3, mockTicketsCount, false)
    ).toBe('67%');
  });
});
