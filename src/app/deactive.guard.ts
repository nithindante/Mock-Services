import { CanDeactivateFn } from '@angular/router';
import { RouteGuardComponent } from './route-guard/route-guard.component';

export const deactiveGuard: CanDeactivateFn<RouteGuardComponent> = (component: RouteGuardComponent) => {
  if (component.value){
   return window.confirm("Do you want to proceed or not")
  }
  return true;
};
