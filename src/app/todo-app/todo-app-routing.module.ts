import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoAppComponent } from './todo-app.component';         // add

const routes: Routes = [{                                   // add
    path: '',                                               // add
    component: TodoAppComponent,                              // add
}];        



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoAppRoutingModule { }
