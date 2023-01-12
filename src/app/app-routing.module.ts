import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmptyComponent } from './empty/empty.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WithLastFromComponent } from './with-last-from/with-last-from.component';
import { WithLatestFromRoutingModule } from './with-last-from/with-latest-from-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo : 'home',
    pathMatch  : "full"
  },
  {
    path: 'home',
    component: EmptyComponent
  },  
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    WithLatestFromRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
