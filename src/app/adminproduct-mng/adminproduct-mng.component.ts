import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EkartserviceService } from '../ekartservice.service';

@Component({
  selector: 'app-adminproduct-mng',
  templateUrl: './adminproduct-mng.component.html',
  styleUrls: ['./adminproduct-mng.component.css']
})
export class AdminproductMngComponent implements OnInit {

  pdata: any = []

  constructor(private rout: Router, private es: EkartserviceService) { }

  ngOnInit(): void {
    this.es.getAllProducts().subscribe({
      next: (result: any) => {
        console.log(result.message);
        this.pdata = result.message

      }
    })
  }

  addpage() {
    this.rout.navigateByUrl("admin-addproduct")
  }

  editPage(id: any) {
    this.rout.navigateByUrl(`admin-editproduct/${id}`)
  }

  deleteproduct(id:any) {
    this.es.deleteProduct(id).subscribe({

      next: (result: any) => {
        alert(result.message)

        this.es.getAllProducts().subscribe({
          next: (result: any) => {
            console.log(result.message);
            this.pdata = result.message
          }
        })
      }
    })
  }

}
