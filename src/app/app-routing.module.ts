import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudiantesComponent } from './modules/estudiantes/estudiantes.component';

const routes: Routes = [
  { path: '', component: EstudiantesComponent },
  { path: 'estudiantes', component: EstudiantesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
