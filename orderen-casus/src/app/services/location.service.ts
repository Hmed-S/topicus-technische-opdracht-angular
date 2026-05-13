import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LOCATION_FIXTURES } from 'src/app/fixtures';
import { Location } from 'src/app/models/location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private readonly locations: Location[] = LOCATION_FIXTURES;

  getLocations(): Observable<Location[]> {
    return of(this.locations);
  }
}
