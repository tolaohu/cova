import { ModuleWithProviders, NgModule } from '@angular/core';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';

import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline,
} from '@ant-design/icons-angular/icons';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

const icons = [
  MenuFoldOutline,
  MenuUnfoldOutline,
  DashboardOutline,
  FormOutline,
];

@NgModule({
  imports: [
    NzIconModule,
    NzToolTipModule,
    NzAvatarModule,
    NzLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
  ],
  exports: [
    NzIconModule,
    NzToolTipModule,
    NzAvatarModule,
    NzLayoutModule,
    FormsModule,
    NzInputModule,
    ReactiveFormsModule,
    NzFormModule,
  ],
  providers: [{ provide: NZ_ICONS, useValue: icons }],
})
export class IconsProviderModule {
  static forRoot(): ModuleWithProviders<IconsProviderModule> {
    return {
      ngModule: IconsProviderModule,
      providers: [],
    };
  }
}
