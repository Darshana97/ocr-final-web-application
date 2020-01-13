import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private token : string;
  private isAuth = false;
  private userId : string;
  private expiresIn: number;
  constructor(private http: HttpClient, private router : Router) {

  }

  loginUser(value){
    this.http.get('http://localhost:4000/api/user?email='+value.email+ '&' + 'password='+value.password).subscribe((res)=>{
      //this.http.get('https://ocr-backend-mihindu.herokuapp.com/api/user?email='+value.email+ '&' + 'password='+value.password).subscribe((res)=>{
      console.log(res);
      //looping through each response data and check with the value user entered!
      this.token = res['token'];
      if(this.token){
        this.isAuth = true;
        this.userId = res['id'];
        this.expiresIn = res['expiresIn'];
        const now = new Date();
        const expirationDate = new Date(now.getTime() + (this.expiresIn * 1000));
        this.saveAuthData(this.token, expirationDate, this.userId);
        this.router.navigateByUrl("/home-page");
      }
    })
  }

  isUserLogedIn(){
    return this.isAuth;
  }

  getToken(){
    return this.token;
  }

  private saveAuthData(token: string, expirationDate: Date, userId: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
    localStorage.setItem('user_id', userId);
  }

  getUserId(){
    return this.userId;
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('user_id');
  }

  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (authInformation) {
      const now = new Date();
      const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
      if (expiresIn > 0) {
        this.token = authInformation.token;
        this.isAuth = true;
        this.userId = authInformation.user_id;
      }
    }
  }

  private getAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    const user_id = localStorage.getItem('user_id');
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
      user_id: user_id
    }
  }

  logOutUser() {
    this.token = null;
    this.isAuth = false;
    this.userId = null;
    this.clearAuthData();
    this.router.navigateByUrl('/');
  }
}
