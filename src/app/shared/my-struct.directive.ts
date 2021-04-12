import {
  Directive,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../core/auth.service';

@Directive({
  selector: '[fpMyStruct]',
})
export class MyStructDirective implements OnDestroy {

  private subscription: Subscription;

  constructor(
    private template: TemplateRef<any>,
    private vcr: ViewContainerRef,
    private authService: AuthService
  ) {
    this.subscription = authService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.vcr.clear();
      if (isLoggedIn) {
        this.vcr.createEmbeddedView(this.template);
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
