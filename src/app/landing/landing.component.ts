import { Component, OnInit } from '@angular/core';
import { EkartserviceService } from '../ekartservice.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  products: any = []

  constructor(private es: EkartserviceService) { }


  ngOnInit(): void {
    this.es.getAllProducts().subscribe({
      next: (result: any) => {
        this.products = result.message
      }
    })
  }

}
