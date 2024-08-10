import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  allCustomer: any;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getAllCustomer();
  }


  getAllCustomer(){
    this.userService.getAllMerchant().subscribe(res=>{
      console.log(res);
      
    })
  }

}
