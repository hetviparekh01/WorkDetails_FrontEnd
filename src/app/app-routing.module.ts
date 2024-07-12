import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { HorizontalComponent } from './layout/horizontal/horizontal.component';

const routes: Routes = [
  {
    path:'',
    component:HorizontalComponent,
    loadChildren:()=>import('./pages/pages-routing.module').then(m=>m.PagesRoutingModule)
  },
  {
    path:'auth',
    component:AuthLayoutComponent,
    loadChildren:()=>import('./authentication/authentication.module').then(m=>m.AuthenticationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
