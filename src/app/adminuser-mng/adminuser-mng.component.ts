import { Component, OnInit } from '@angular/core';
import { EkartserviceService } from '../ekartservice.service';

@Component({
  selector: 'app-adminuser-mng',
  templateUrl: './adminuser-mng.component.html',
  styleUrls: ['./adminuser-mng.component.css']
})
export class AdminuserMngComponent implements OnInit {

  users: any = []

  constructor(private es: EkartserviceService) { }

  ngOnInit(): void {

    this.getusers()
  }

  getusers() {
    this.es.getAllUsers().subscribe({
      next: (result: any) => {
        this.users = result.message
      }
    })
  }

  deleteuser(id: any) {
    this.es.deleteUser(id).subscribe({
      next: (result: any) => {
        alert(result.message)
      }
    })
  }

}
