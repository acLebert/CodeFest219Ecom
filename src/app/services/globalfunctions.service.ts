import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { encode } from 'punycode';

@Injectable({
  providedIn: 'root'
})
export class GlobalFunctions {
  constructor(@Inject(DOCUMENT) private document: Document, private http: HttpClient) {}
  //Ned's Key, need to get a new one when I push the Prototype
  secret_api_key = '9fa8457bc25b40728dd9f40a7f57dc16';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'secret_key': this.secret_api_key
    })
  };

  lowerModal(txt, status="success") {
    let el = this.document.getElementById("bottomRightModal");
    el.classList.remove("btn-success", "btn-warning", "btn-danger");
    let newClass = "";
    switch(status)
    {
      case "warn":
        newClass = "btn-warning";
        break;
      case "error":
        newClass= "btn-danger";
        break;
      default:
        newClass= "btn-success";
        break;
    }
    el.innerHTML = txt;
    el.style.bottom = "1em";
    el.classList.add(newClass);
    setTimeout(function() {
      this.document.getElementById("bottomRightModal").style.bottom = "-10em";
    }, 5000);
  };

  login(data) {
    return this.http.post('https://stage-api.saloniris.com/api/v2/Session/EmployeeLogin',data,this.httpOptions);
  }
}
