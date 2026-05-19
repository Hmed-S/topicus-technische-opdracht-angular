import { Injectable, Inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { TestService } from "../../services/test.service";
import { Appstore } from "../app-store";
import { getTests, toggleTestsLoading, setTestsError, setTests } from "./test-actions";
import { catchError, of, switchMap, tap } from "rxjs";

@Injectable()
export class TestEffects{
    
    constructor( 
        private actions$: Actions,
        @Inject(Store) private store: Store<Appstore>,
        private testService: TestService
    ) {}

    getTests$ = createEffect( () => this.actions$.pipe(
        ofType(getTests),
        tap( () => this.store.dispatch( toggleTestsLoading( )) ),
        switchMap(action => this.testService.getTests()
        .pipe(
            switchMap(tests => of(
                toggleTestsLoading(),
                setTests({ tests })
            )),
            catchError(() => of(setTestsError( {happend:true, message: 'unable to retrieve Tests' } ))),
        ),
    )
));


}