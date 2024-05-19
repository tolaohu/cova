import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  closeEvent = new EventEmitter();
  @Input()
  showSide: boolean = false;

  closeDialog() {
    this.closeEvent.emit();
  }
}
