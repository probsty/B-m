import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsLoggedInGuard } from './guards/is-logged-in.guard';
import { httpInterceptorProviders } from './http-interceptors';
// import { HomeComponent } from './main/home/home.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [IsLoggedInGuard, httpInterceptorProviders],
})
export class AppRoutingModule {}
