import MockDate from 'mockdate';

import { DragonUtil } from './dragon.util';

describe('DragonUtil', () => {
  describe('initial util state', () => {
    it('should be created', () => {
      expect(DragonUtil).toBeDefined();
    });

    it('should define public getLevel()', () => {
      expect(DragonUtil.getLevel).toEqual(jasmine.any(Function));
    });
  });

  describe('getLevel()', () => {
    it('should return "level-1" when hour diff from "now" is less than 1', () => {
      MockDate.set('2019-01-02');
      const date = '2019-01-01T23:30:00.000Z';

      const level: string = DragonUtil.getLevel(date);

      expect(level).toBe('level-1');
    });

    it('should return "level-2" when hour diff from "now" is equal 1', () => {
      MockDate.set('2019-01-02');
      const date = '2019-01-01T23:00:00.000Z';

      const level: string = DragonUtil.getLevel(date);

      expect(level).toBe('level-2');
    });

    it('should return "level-2" when hour diff from "now" is greater than 1 and less than 5', () => {
      MockDate.set('2019-01-02');
      const date = '2019-01-01T20:00:00.000Z';

      const level: string = DragonUtil.getLevel(date);

      expect(level).toBe('level-2');
    });

    it('should return "level-3" when hour diff from "now" is equal 5', () => {
      MockDate.set('2019-01-02');
      const date = '2019-01-01T19:00:00.000Z';

      const level: string = DragonUtil.getLevel(date);

      expect(level).toBe('level-3');
    });

    it('should return "level-3" when hour diff from "now" is greater than 5 and less than 24', () => {
      MockDate.set('2019-01-02');
      const date = '2019-01-01T01:00:00.000Z';

      const level: string = DragonUtil.getLevel(date);

      expect(level).toBe('level-3');
    });

    it('should return "level-4" when hour diff from "now" is equal 24', () => {
      MockDate.set('2019-01-02');
      const date = '2019-01-01T00:00:00.000Z';

      const level: string = DragonUtil.getLevel(date);

      expect(level).toBe('level-4');
    });

    it('should return "level-4" when hour diff from "now" is greater than 24 till infinite', () => {
      MockDate.set('2019-01-02');
      const date = '2018-12-30T20:00:00.000Z';

      const level: string = DragonUtil.getLevel(date);

      expect(level).toBe('level-4');
    });
  });
});