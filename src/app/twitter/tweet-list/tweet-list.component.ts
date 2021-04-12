import { HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { TwittwerService } from '../twittwer.service';

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
  constructor(private twitter: TwittwerService, @Inject(HTTP_INTERCEPTORS) private interceptors: HttpInterceptor[]) {
    twitter.loadPosts().subscribe(v => console.log(v));
    console.log(interceptors)
   }

  ngOnInit(): void {
  }

}
