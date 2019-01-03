import MockDate from 'mockdate';

import { DatetimeUtil } from './datetime.util';

describe('DatetimeUtil', () => {
  describe('initial util state', () => {
    it('should be created', () => {
      expect(DatetimeUtil).toBeDefined();
    });

    it('should define public differenceInHoursFromNow()', () => {
      expect(DatetimeUtil.differenceInHoursFromNow).toEqual(jasmine.any(Function));
    });
  });

  describe('differenceInHoursFromNow()', () => {
    it('should have 3 hours of difference from setted "now"', () => {
      MockDate.set('2019-01-02');
      const date = '2019-01-01T21:00:00.000Z';
      
      expect(DatetimeUtil.differenceInHoursFromNow(date)).toBe(3);
    });

    it('should have 4 hours of difference from setted "now"', () => {
      MockDate.set('2019-01-02');
      const date = '2019-01-01T19:30:00.000Z';
      
      expect(DatetimeUtil.differenceInHoursFromNow(date)).toBe(4);
    });

    it('should return negative number when date is in the future', () => {
      MockDate.set('2019-01-02');
      const date = '2019-01-02T19:00:00.000Z';

      expect(DatetimeUtil.differenceInHoursFromNow(date)).toBeLessThan(0);
    });
  });
});