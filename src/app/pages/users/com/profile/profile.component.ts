import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  allCustomer: any;
  userWallet: any;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // this.getAllCustomer();
    this.getAllWallet();
  }

  getAllCustomer() {
    this.userService.getAllMerchant().subscribe((res) => {
      console.log(res);
    });
  }

  getAllWallet() {
    const userCova = JSON.parse(sessionStorage.getItem('user')!);
    this.userService.getAllWallet().subscribe((res: any) => {
      if (res && res.status) {
        this.userWallet = res.wallets.find(
          (item: any) => item.email == userCova[0].email
        );

        this.userService.userSubject.next(this.userWallet);
        this.userService.allUserSubject.next(res.wallets);
      }
    });
  }
}
