import { Injectable, Inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { Appstore } from "../app-store";
import { catchError, of, switchMap, tap } from "rxjs";
import { setLocationError, setLocations, toggleLocationLoading } from "./location-actions";
import { getLocations } from "./location-actions";
import { LocationService } from "../../services/location.service";

@Injectable()
export class LocationEffects{
    
    constructor( 
        private actions$: Actions,
        @Inject(Store) private store: Store<Appstore>,
        private LocationService: LocationService
    ) {}

    getLocations$ = createEffect( () => this.actions$.pipe(
        ofType(getLocations),
        tap( () => this.store.dispatch( toggleLocationLoading( )) ),
        switchMap(action => this.LocationService.getLocations()
        .pipe(
            switchMap(locations => of(
                toggleLocationLoading(),
                setLocations({ locations })
            )),
            catchError(() => of(setLocationError( {happend:true, message: 'unable to retrieve Locations' } ))),
        ),
    )
));


}