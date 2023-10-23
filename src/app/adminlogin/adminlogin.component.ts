import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EkartserviceService } from '../ekartservice.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

  adminloginForm = this.fb.group({
    auname: [''],
    apsw: ['']
  })

  constructor(private fb: FormBuilder, private rout: Router, private es: EkartserviceService) { }

  adminlogin() {
    this.es.adminLoginn(this.adminloginForm.value.auname, this.adminloginForm.value.apsw).subscribe({
        next: (result: any) => {
          this.rout.navigateByUrl("admin-home")
        },
        error: (result: any) => {
          alert(result.error.message)
        }
      })
  }

}
