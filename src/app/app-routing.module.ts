import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'test', loadChildren:() => import('./test/test.module').then(m => m.TestModule)},
  { path: 'twitter', loadChildren:() => import('./twitter/twitter.module').then(m => m.TwitterModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
