import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class DateService {

  public getTimeOfDate(datetimeString: string): string{
    return formatDate(datetimeString, 'HH:mm', 'en-US', 'UTC');
  }

  public toFriendlyString(datetimeString: string): string{
    const date = new Date(datetimeString);
    return date.toDateString();
  }

  public dateIsInPast(dateTimeString: string): boolean{
    const date = new Date(dateTimeString);
    return date.getTime()< Date.now()
  }

  public dateIsInWeekend(datetimeString: string): boolean{
    const date = new Date(datetimeString);
    const day = date.getUTCDate();
    return day === 0 || day === 6
  }

}
