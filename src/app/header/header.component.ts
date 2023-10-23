import { Component, OnInit } from '@angular/core';
import { EkartserviceService } from '../ekartservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  count: any = ""
  uid: any = ""
  login: any = ""

  constructor(private es: EkartserviceService, private rout: Router) { }

  ngOnInit(): void {

    this.es.login.subscribe((logData: any) => {
      this.login = logData
    })

    this.es.cartCount.subscribe((data: any) => {
      this.count = data
    })

  }

  cart() {
    if (localStorage.getItem("user")) {
      this.uid = localStorage.getItem("user")
    }
    this.rout.navigateByUrl('mycart/' + this.uid)
  }

  toWishlist() {
    if (localStorage.getItem("user")) {
      this.uid = localStorage.getItem("user")
    }
    this.rout.navigateByUrl('wishlist/' + this.uid)
  }

  logout() {
    localStorage.removeItem("user")
    this.es.login.next(false)
    this.rout.navigateByUrl("")
  }
}
