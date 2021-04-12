import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fp-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.scss']
})
export class TweetListComponent implements OnInit {

  tweets: any[] = [
    {
      title: 'tweet1',
      data: 'tweet description1',
      type: 'text'
    },
    {
      title: 'tweet2',
      data: 'tweet description2',
      type: 'text'
    },
    {
      title: 'tweet3',
      data: 'http://imgurl.jpg',
      type: 'img'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
