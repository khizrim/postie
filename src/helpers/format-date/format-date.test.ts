import { expect } from 'chai';
import type { SinonFakeTimers } from 'sinon';
import sinon from 'sinon';

import { formatDate } from 'src/helpers/format-date';

describe('formatDate', () => {
  const mockNow = new Date('2024-06-29T12:00:00');

  let clock: SinonFakeTimers;

  before(() => {
    clock = sinon.useFakeTimers(mockNow.getTime());
  });

  after(() => {
    clock.restore();
  });

  it("should return time for today's date", () => {
    const inputDate = new Date('2024-06-29T08:15:00');
    expect(formatDate(inputDate)).to.equal('08:15');
  });

  it('should return weekday name for a date within the last week', () => {
    const inputDate = new Date('2024-06-25T10:00:00');
    expect(formatDate(inputDate)).to.equal('Вт');
  });

  it('should return day and month for a date earlier this year', () => {
    const inputDate = new Date('2024-05-20T00:00:00');
    expect(formatDate(inputDate)).to.equal('20 май');
  });

  it('should return day, month, and year for a date in a previous year', () => {
    const inputDate = new Date('2023-12-15T00:00:00');
    expect(formatDate(inputDate)).to.equal('15 дек 2023');
  });

  it('should handle end of month correctly', () => {
    const inputDate = new Date('2024-02-28T23:59:59');
    expect(formatDate(inputDate)).to.equal('28 фев');
  });

  it('should handle beginning of month correctly', () => {
    const inputDate = new Date('2024-03-01T00:00:00');
    expect(formatDate(inputDate)).to.equal('01 мар');
  });

  it("should handle New Year's Eve correctly", () => {
    const inputDate = new Date('2023-12-31T23:59:59');
    expect(formatDate(inputDate)).to.equal('31 дек 2023');
  });

  it('should handle leap day correctly', () => {
    const inputDate = new Date('2024-02-29T00:00:00');
    expect(formatDate(inputDate)).to.equal('29 фев');
  });
});
