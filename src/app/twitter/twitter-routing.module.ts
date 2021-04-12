import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TweetListComponent } from './tweet-list/tweet-list.component';

const routes: Routes = [
  {path: '', component: TweetListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TwitterRoutingModule { }
