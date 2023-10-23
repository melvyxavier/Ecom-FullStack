import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EkartserviceService } from '../ekartservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {

  userloginForm = this.fb.group({
    email: [''],
    psw: ['']
  })

  constructor(private fb: FormBuilder, private es: EkartserviceService, private rout: Router) { }

  userlogin() {
    this.es.userLogin(this.userloginForm.value.email, this.userloginForm.value.psw).subscribe({
      next: (result: any) => {
        alert(result.message)
        localStorage.setItem("user", result._id)
        this.rout.navigateByUrl("")
        this.es.header()
      },
      error: (result: any) => {
        alert(result.error.message)
        this.rout.navigateByUrl("user-signup")
      }
    })
  }

}
