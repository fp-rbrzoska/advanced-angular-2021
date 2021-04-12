import { Component, OnInit } from '@angular/core';
import { BaseTweet } from '../base-tweet.class';

@Component({
  selector: 'fp-tweet-text',
  templateUrl: './tweet-text.component.html',
  styleUrls: ['./tweet-text.component.scss'],
  providers: [{
    provide: BaseTweet, useExisting: TweetTextComponent
  }]
})
export class TweetTextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  like() {
    console.log('like text')
  }
}
