import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: String='';

  constructor(private _user:UserService, private _router:Router) {
    this._user.user()
    .subscribe(
      data=>this.addName(data), 
      error=>this._router.navigate(['/login'])
    )
  }

  addName(data) {
    this.username = data.username;
  }

  ngOnInit() {
      var now = new Date();
      var hour = now.getHours();
      var minute = now.getMinutes();
      var fulltime = " ";


  
      const arrayHrs = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11];
        if (minute < 10){
        fulltime = arrayHrs[hour]  + " : " +  " 0 "  + minute;
      } else {
        fulltime = arrayHrs[hour]  + " : " +  "  "  + minute; 
      }
      
  
      document.getElementById("present").innerHTML = fulltime;
  
      console.log(fulltime);
      

  }

  logout(){
    this._user.logout()
    .subscribe(
      data=>{console.log(data);this._router.navigate(['/login'])},
      error=>console.error(error)
    )
  }

 


  

}
