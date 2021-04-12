import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwitterRoutingModule } from './twitter-routing.module';
import { TweetListComponent } from './tweet-list/tweet-list.component';
import { TweetItemComponent } from './tweet-item/tweet-item.component';
import { TweetTextComponent } from './tweet-text/tweet-text.component';
import { TweetImageComponent } from './tweet-image/tweet-image.component';
import { SharedModule } from '../shared/shared.module';
import { TwittwerService } from './twittwer.service';


@NgModule({
  declarations: [
    TweetListComponent,
    TweetItemComponent,
    TweetTextComponent,
    TweetImageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    TwitterRoutingModule
  ],
  providers: [TwittwerService]
})
export class TwitterModule { }
