import { differenceInHours } from 'date-fns';

export class DatetimeUtil {
  static differenceInHoursFromNow(date: string) {
    return differenceInHours(
      new Date(),
      new Date(date),
    );
  }
}