import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'fp-my-custom-control',
  templateUrl: './my-custom-control.component.html',
  styleUrls: ['./my-custom-control.component.scss'],
  providers: [{provide: NG_VALUE_ACCESSOR, useExisting: MyCustomControlComponent, multi: true}]
})
export class MyCustomControlComponent implements OnInit, ControlValueAccessor {

  controlState: number = null;

  onChange = (val) => {};
  onTouched = (val) => {};
  constructor() { }

  writeValue(val: any): void {
    this.controlState = val;
    this.onChange(val);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched(this.controlState)
  }

  setDisabledState?(isDisabled: boolean): void {

  }

  ngOnInit(): void {
  }

  setValue(val) {
    this.controlState = val;
    this.onChange(val)
  }

}
