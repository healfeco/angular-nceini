import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  loginUser(e){
    e.preventDefault();
    console.log(e);
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;

    if(username == 'larteaga' && password == 'jklasd'){
      this.router.navigate(['dashboard'])
    }
    else
    {
      console.log("Bad password or user");
    }
  }

}