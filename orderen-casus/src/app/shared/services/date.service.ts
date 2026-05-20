import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateService {

  public getTimeOfDate(datetimeString: string): string{
    const date = new Date(datetimeString);
    return `${date.getHours()}:${date.getMinutes()}`
  }

  public toFriendlyString(datetimeString: string): string{
    const date = new Date(datetimeString);
    return date.toLocaleDateString();
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
