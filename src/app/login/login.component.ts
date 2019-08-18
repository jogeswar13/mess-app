import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CommonService } from '../shared/common.service';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [CommonService]
})
export class LoginComponent implements OnInit {
  value = 'Clear me';
  hide = true;
  constructor(private service: CommonService) { }
  // constructor(){}
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  ngOnInit() {

  }

  login(name: string, password: string) {
    console.log('unser login= ', name)
    console.log('password login= ', password)
    this.service.loginRequest(name, password)
      .subscribe(resp => {
        console.log('response=> ',resp)
      },
        error => {

        });
  }
}
