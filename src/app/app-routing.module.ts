import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { AppComponent } from './app.component';
import { BasicdetailsComponent } from './basicdetails/basicdetails.component';
import { FormsComponent } from './forms/forms.component';
import { LazyLoadingModule } from './lazy-loading/lazy-loading.module';
import { RouteGuardComponent } from './route-guard/route-guard.component';
import { sampleGuardGuard } from './sample-guard.guard';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { childGuardGuard } from './child-guard.guard';
import { deactiveGuard } from './deactive.guard';
const routes: Routes = [
  { path: '', component: BasicdetailsComponent },
  { path: 'userlist/:id', component: UserListComponent },
  { path: 'forms', component: FormsComponent },
  {  
    path: 'lazy',
    loadChildren: () =>
      import('./lazy-loading/lazy-loading.module').then(
        (a) => a.LazyLoadingModule
      ),
  },
  {path:'route', canActivate:[sampleGuardGuard],
    children:
    [{path:'',component:RouteGuardComponent,canDeactivate:[deactiveGuard]},
    {path:'', canActivateChild:[childGuardGuard],
      children:
      [{path: 'admin', component: AdminComponent},
        {path: 'user', component: UserComponent}
      ]}]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
