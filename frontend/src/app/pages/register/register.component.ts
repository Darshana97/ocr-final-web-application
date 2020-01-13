import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isSuccess = false;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(register: NgForm) {
    // console.log(value);
    if (register.valid) {
      this.http.post('http://localhost:4000/api/user', register.value).subscribe((res) => {

        //looping through each response data and check with the value user entered!

        if (res['message'] = "SUCCESS!") {
          this.isSuccess = true;
        }
      })
    }
  }

}
