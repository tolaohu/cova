import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  isExpand: boolean = false;
  onShowSide(val: boolean) {
    this.isExpand = val;
  }
}
