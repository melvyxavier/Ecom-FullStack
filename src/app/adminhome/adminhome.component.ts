import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent {

  constructor(private rout:Router) {}

  usermng(){
    this.rout.navigateByUrl("admin-usermng")
  }

  productmng(){
    this.rout.navigateByUrl("admin-productmng")
  }

}
