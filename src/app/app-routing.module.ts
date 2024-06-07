import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfPinsComponent } from './pins/list-of-pins/list-of-pins.component';

const routes: Routes = [
  {path:'', component:ListOfPinsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
