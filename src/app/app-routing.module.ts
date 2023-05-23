import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackendComponent } from './backend/backend.component';
import { LecturesComponent } from './lectures/lectures.component';
import { DamianCardComponent } from './damian-card/damian-card.component';


const routes: Routes = [
  { path: '', component: DamianCardComponent},
  { path: 'backend', component: BackendComponent },
  { path: 'wolneLektury', component: LecturesComponent}
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
