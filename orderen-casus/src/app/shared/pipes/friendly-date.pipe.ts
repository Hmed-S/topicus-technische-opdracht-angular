import {inject, Pipe, PipeTransform} from '@angular/core';
import { DateService } from '../services/date.service';

@Pipe({
  name: 'friendlyDate',
})
export class FriendlyDatePipe implements PipeTransform {
    private dateService : DateService = inject(DateService);

    transform(value: string): string {
        return this.dateService.toFriendlyString(value);
    }
}