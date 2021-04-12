import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetImageComponent } from './tweet-image.component';

describe('TweetImageComponent', () => {
  let component: TweetImageComponent;
  let fixture: ComponentFixture<TweetImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TweetImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
