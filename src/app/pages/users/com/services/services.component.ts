import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  userWallet: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.listenForUserSubject();
  }

  listenForUserSubject() {
    this.userService.userSubject.subscribe((res) => {
      this.userWallet = res;
    });
  }
}
