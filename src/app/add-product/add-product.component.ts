import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EkartserviceService } from '../ekartservice.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor(private fb: FormBuilder, private es: EkartserviceService) { }

  addproductForm = this.fb.group({
    pname: [''],
    price: [''],
    image: ['']
  })

  addNewproduct() {

    const path = this.addproductForm.value

    const bodyData = {
      pname: path.pname,
      price: path.price,
      image: path.image
    }

    this.es.addProduct(bodyData).subscribe({
      next: (result: any) => {
        alert("new product added")
        this.addproductForm.reset()
      }
    })

  }

}
