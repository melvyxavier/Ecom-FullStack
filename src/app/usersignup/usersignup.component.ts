import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EkartserviceService } from '../ekartservice.service';
import { Router } from '@angular/router';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent {

  usersignupForm = this.fb.group({
    email: [''],
    psw: ['']
  })

  constructor(private fb: FormBuilder, private es: EkartserviceService, private rout: Router) { }



  signup() {
    this.es.userSignup(this.usersignupForm.value.email, this.usersignupForm.value.psw).subscribe({
      next: (result: any) => {
        alert(result.message)
        this.rout.navigateByUrl('user-login')
      },
      error: (result: any) => {
        alert(result.error.message)
      }
    })

  }

}
