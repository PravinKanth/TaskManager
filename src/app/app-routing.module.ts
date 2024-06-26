import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { TaskboardComponent } from './taskboard/taskboard.component';

const routes: Routes = [
  {path:"form",component:FormComponent},
  {path:"taskboard", component:TaskboardComponent},
  {path: '', redirectTo: '/form', pathMatch: 'full' }, 
  {path:"**", redirectTo:"/form"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
