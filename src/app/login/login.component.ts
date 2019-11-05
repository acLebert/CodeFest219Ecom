import { Component } from '@angular/core';
import { GlobalFunctions } from '../services/globalfunctions.service';
import { LocalstorageService } from '../services/localstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public fn: GlobalFunctions, private storageService: LocalstorageService) {};

  credentials = {
    Email: "test",
    Password: "test"
  }
  submitted = false;
  onSubmit() {
    if(this.submitted == true)return;
    this.submitted = true;
    //Not dot notation because VSCode didn't like me adding an attribute
    this.credentials["LocalDateTime"] = new Date().toISOString();
    let loginAttempt = this.fn.login(this.credentials);
    loginAttempt.subscribe((res)=>{
      console.log(res);
      this.storageService.setItem('currentUser', JSON.stringify(res['SessionInformation']));
      this.fn.lowerModal("Login Successful!");
    }, (err)=>{
      err = err.error;
      this.fn.lowerModal(err.StatusMessage, "error");
      console.warn(JSON.stringify(err));
      this.submitted = false;
    })
  }
}
