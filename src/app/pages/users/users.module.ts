import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { DashboardComponent } from './com/dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { ProfileComponent } from './com/profile/profile.component';
import { WalletComponent } from './com/wallet/wallet.component';
import { SettingsComponent } from './com/settings/settings.component';
import { ServicesComponent } from './com/services/services.component';
import { UserService } from './service/user.service';

@NgModule({
  declarations: [
    DashboardComponent,
    LayoutComponent,
    HeaderComponent,
    SideNavComponent,
    ProfileComponent,
    WalletComponent,
    SettingsComponent,
    ServicesComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    IconsProviderModule,
    NzDropDownModule,
    NzBadgeModule,
  ],
  providers: [UserService],
})
export class UsersModule {}
