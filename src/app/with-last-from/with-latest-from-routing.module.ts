import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WithLastFromComponent } from './with-last-from.component';

const routes : Routes = [
  {
    path: 'withLatestFrom',
    component: WithLastFromComponent
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class WithLatestFromRoutingModule { }
