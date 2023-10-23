import { Component, OnInit } from '@angular/core';
import { EkartserviceService } from '../ekartservice.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {

  userId: any = ""
  pdatas: any = []
  total: any = 0

  constructor(private es: EkartserviceService) { }

  ngOnInit(): void {

    this.cartItems()

  }

  cartItems() {
    if (localStorage.getItem("user")) {
      this.userId = localStorage.getItem("user")
      this.es.cartProducts(this.userId).subscribe({
        next: (data: any) => {
          this.pdatas = data.message
          console.log(this.pdatas);

          this.es.totalPrice(this.userId).subscribe({
            next: (data: any) => {
              this.total = data.message
              console.log(this.total);

            }
          })

        }
      })
    }

  }

  increment(pId: any) {
    this.es.increment(pId).subscribe({
      next: (out: any) => {
        this.cartItems()
      }
    })
  }

  decrement(pId: any) {
    this.es.decrement(pId).subscribe({
      next: (out: any) => {
        this.cartItems()
      },
      error: (result: any) => {
        this.remove(pId)
        this.cartItems()
      }
    })
  }

  remove(id: any) {
    this.es.remove(id).subscribe({
      next: (data: any) => {
        this.cartItems()
        this.es.cartUpdate()
      }
    })
  }

}
