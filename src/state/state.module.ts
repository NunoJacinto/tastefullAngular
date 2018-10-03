import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { counterReducer } from '@state/counter/counter.reducer';
import { CounterEffects } from '@state/counter/counter.effects';
import { todoListReducer } from '@state/todo-list/todo-list.reducers';


@NgModule({
    imports: [
        StoreModule.forRoot({
            count: counterReducer,
            todoList: todoListReducer
        }),
        EffectsModule.forRoot([                        
            CounterEffects                            
        ]),                                           

        StoreDevtoolsModule.instrument()
    ]
})
export class StateModule { }