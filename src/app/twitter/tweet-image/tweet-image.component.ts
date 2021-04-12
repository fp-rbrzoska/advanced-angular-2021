import { Component, OnInit } from '@angular/core';
import { BaseTweet } from '../base-tweet.class';

@Component({
  selector: 'fp-tweet-image',
  templateUrl: './tweet-image.component.html',
  styleUrls: ['./tweet-image.component.scss'],
  providers: [{
    provide: BaseTweet, useExisting: TweetImageComponent
  }]
})
export class TweetImageComponent implements OnInit, BaseTweet {

  constructor() { }

  ngOnInit(): void {
  }

  like() {
    console.log('like image')
  }

}
