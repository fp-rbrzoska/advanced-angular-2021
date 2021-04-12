import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators'
import { HighlightDirective } from 'src/app/shared/highlight.directive';
@Component({
  selector: 'fp-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, AfterViewInit {

  @ViewChild('elem') elem: ElementRef<HTMLInputElement>;
  @ViewChildren(HighlightDirective) highlightedElements: QueryList<HighlightDirective>
  showBox = false;


  ngOnInit(): void {
  }

  ngAfterViewInit() {
    console.log(this.elem);
    this.highlightedElements.changes.subscribe(changes => console.log(changes))

    fromEvent(this.elem.nativeElement, 'input')
    .pipe(map((e: any) => e.target.value))
    .subscribe(e => console.log(e))
  }

  highlightAll() {
    this.highlightedElements.forEach(el => el.highlightElement())
  }

}
