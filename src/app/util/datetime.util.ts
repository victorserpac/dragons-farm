import { differenceInHours } from 'date-fns';

export class DatetimeUtil {
  static differenceInHoursFromToday(date: string) {
    return differenceInHours(
      new Date(),
      new Date(date),
    );
  }
}