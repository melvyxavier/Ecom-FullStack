import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EkartserviceService } from '../ekartservice.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  pid: any = ""
  pdata: any = {}

  constructor(private router: ActivatedRoute, private es: EkartserviceService) { }

  ngOnInit(): void {
    this.router.params.subscribe((data: any) => {
      this.pid = data.id

      this.es.getProduct(this.pid).subscribe({
        next: (result: any) => {
          this.pdata = result.message
          console.log(this.pdata);

        }
      })
    })
  }

  editproduct() {
    this.es.editProduct(this.pid, this.pdata).subscribe({
      next: (result: any) => {
        alert(result.message)
      }
    })
  }

}
