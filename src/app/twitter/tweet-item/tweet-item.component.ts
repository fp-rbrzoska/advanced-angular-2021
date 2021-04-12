import { Component, ContentChild, ContentChildren, OnInit } from '@angular/core';
import { BaseTweet } from '../base-tweet.class';

@Component({
  selector: 'fp-tweet-item',
  templateUrl: './tweet-item.component.html',
  styleUrls: ['./tweet-item.component.scss']
})
export class TweetItemComponent implements OnInit {

  @ContentChild(BaseTweet) myTweet: BaseTweet;
  constructor() { }

  ngOnInit(): void {
  }

  likeTweet() {
    this.myTweet.like();
  }

}
