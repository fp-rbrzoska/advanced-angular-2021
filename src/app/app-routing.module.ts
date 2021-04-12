import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'test', loadChildren:() => import('./test/test.module').then(m => m.TestModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
