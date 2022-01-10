import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth.routing';
import { OPageFoundComponent } from './o-page-found/o-page-found.component';
import { PagesRoutingModule } from './pages/pages.routing';

const routes: Routes = [
  {
    path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: OPageFoundComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
