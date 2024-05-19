import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './com/dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { ProfileComponent } from './com/profile/profile.component';
import { SettingsComponent } from './com/settings/settings.component';
import { ServicesComponent } from './com/services/services.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'profile',
        component: ServicesComponent,
      },
      {
        path: 'dashboard',
        component: ProfileComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },

      {
        path: 'services',
        component: DashboardComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
