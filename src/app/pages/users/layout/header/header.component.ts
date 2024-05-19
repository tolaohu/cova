import { Component, EventEmitter, Output, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isAuthenticated = false;
  searchVisible = false;
  quickViewVisible = false;
  isFolded: boolean = false;
  isExpand: boolean = false;
  employerName : any;
  // dashboard$: Observable<EmployerDashboard>;
  logo = `data:image/png;base64,`;
  notificationList = [];

  showNote:boolean = false;

  @ViewChild('reminderOutlet', { read: ViewContainerRef })
  reminderOutlet!: ViewContainerRef;

  @Output() showSide = new EventEmitter<boolean>();

  constructor(
    private viewContainerRef: ViewContainerRef,
    private renderer: Renderer2
  ){}

 

  ngOnInit(): void {
    // this.dashboard$ = this.dashboardService.dashboardData();
    // this.employerName = this.adalService.userInfo.userName;
    // this.themeService.isMenuFoldedChanges.subscribe(
    //   (isFolded) => (this.isFolded = isFolded)
    // );
    // this.themeService.isExpandChanges.subscribe(
    //   (isExpand) => (this.isExpand = isExpand)
    // );
  }

  toggleFold() {
    this.isFolded = !this.isFolded;
    // this.themeService.toggleFold(this.isFolded);
  }

  toggleExpand() {

    // this.isFolded = false;
    this.isExpand = !this.isExpand;
    // this.themeService.toggleExpand(this.isExpand);
    // this.themeService.toggleFold(this.isFolded);
    this.showSide.emit(this.isExpand);
  }

  searchToggle(): void {
    this.searchVisible = !this.searchVisible;
  }

  quickViewToggle(): void {
    this.quickViewVisible = !this.quickViewVisible;
  }

  signout() {
    if (this.isAuthenticated) {
      sessionStorage.removeItem('security-key');
      localStorage.removeItem('emp');
      // this.authService.signOut();
    }
  }

  openReminderModal(data?: any) {
    this.reminderOutlet.clear();
    // this.disableContinue = true;
    this.renderer.addClass(this.reminderOutlet.element.nativeElement, 'open');

    const componentRef = this.viewContainerRef.createComponent(
      SideNavComponent
    );

    // componentRef.instance.data = data;

    const domElem = componentRef.location.nativeElement;

    componentRef.instance.closeEvent.subscribe(() => {
      this.renderer.removeClass(
        this.reminderOutlet.element.nativeElement,
        'open'
      );

      this.reminderOutlet.element.nativeElement.removeChild(domElem);
    });

    // Append DOM element to the body
    this.reminderOutlet.element.nativeElement.appendChild(domElem);

    componentRef.changeDetectorRef.detectChanges();
  }

}
