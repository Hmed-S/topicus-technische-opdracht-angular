import { Injectable, Inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { Appstore } from "../app-store";
import { getPatients, togglePatientLoading, setPatientError, setPatients } from "./patient-actions";
import { catchError, of, switchMap, tap } from "rxjs";
import { PatientService } from "../../services/patient.service";

@Injectable()
export class PatientEffects{
    
    constructor( 
        private actions$: Actions,
        @Inject(Store) private store: Store<Appstore>,
        private PatientService: PatientService
    ) {}

    readonly getPatients$ = createEffect( () => this.actions$.pipe(
        ofType(getPatients),
        tap( () => this.store.dispatch( togglePatientLoading( )) ),
        switchMap(action => this.PatientService.getPatients()
        .pipe(
            switchMap(patients => of(
                togglePatientLoading(),
                setPatients({ patients })
            )),
            catchError(() => of(setPatientError( {happend:true, message: 'unable to retrieve Patients' } ))),
        ),
    )
));


}