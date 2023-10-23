import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EkartserviceService } from '../ekartservice.service';
import { animate } from '@angular/animations';

@Component({
  selector: 'app-singleview',
  templateUrl: './singleview.component.html',
  styleUrls: ['./singleview.component.css']
})
export class SingleviewComponent implements OnInit {

  pid: any = ""
  pdata: any = {}
  uid: any = ""


  constructor(private ar: ActivatedRoute, private es: EkartserviceService, private rout: Router) { }

  ngOnInit(): void {
    this.ar.params.subscribe((data: any) => {
      this.pid = data.id
      this.es.getProduct(this.pid).subscribe({
        next: (result: any) => {
          this.pdata = result.message
          // console.log(this.pdata);

        }
      })
    })
  }


  addtoCart() {

    if (localStorage.getItem("user")) {
      this.uid = localStorage.getItem("user")
      this.es.addTocart(this.uid, this.pid).subscribe({
        next: (result: any) => {
          alert(result.message)
          this.es.cartUpdate()
        }
      })
    }


    else {
      alert("Please Login First")
      this.rout.navigateByUrl('user-login')

    }
  }



  addtowishlist() {

    if (localStorage.getItem("user")) {
      this.uid = localStorage.getItem("user")
      this.es.addToWishlist(this.uid, this.pid).subscribe({
        next: (result: any) => {
          alert(result.message)
        },
        error: (result: any) => {
          alert(result.error.message)
        }
      })
    }

    else {
      alert("Please Login First")
      this.rout.navigateByUrl('user-login')

    }
  }
}
