import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCustomControlComponent } from './my-custom-control.component';

describe('MyCustomControlComponent', () => {
  let component: MyCustomControlComponent;
  let fixture: ComponentFixture<MyCustomControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCustomControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCustomControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
