import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'fp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  myFormControl = new FormControl(1);
  constructor() { }


  ngOnInit(): void {
    this.myFormControl.valueChanges.subscribe(v => console.log(v))
  }

}
