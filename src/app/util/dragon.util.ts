import { Levels } from '../core/models';
import { DatetimeUtil } from './datetime.util';

export class DragonUtil {
  static getLevel(date: string): string {
    const diff = DatetimeUtil.differenceInHoursFromToday(date);

    return Levels.find(
      level => diff >= level.minHourDiff && (diff <= level.maxHourDiff || level.maxHourDiff < 0)
    ).value;
  }
}