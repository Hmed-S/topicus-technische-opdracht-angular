import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LOCATION_FIXTURES } from 'src/app/shared/fixtures';
import { Location } from 'src/app/shared/models/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private readonly locations: Location[] = LOCATION_FIXTURES;

  getLocations(): Observable<Location[]> {
    return of(this.locations);
  }
}
