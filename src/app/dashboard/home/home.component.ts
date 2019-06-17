import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import cities from '../../../assets/json/cities.json';
import data from "../../../assets/json/data.json";
import sol from "../../../assets/json/sol.json";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  users:any;
  myCity:any;
  solo:any;
  clicked = true;
  open = true;
  gender: any;
  raina :any;
  koli:any;

  constructor(private router: Router) {
  

   }

  ngOnInit() {
    this.myCity=cities;
    this.users=data;
    this.solo=sol;
  }


  clickFunc(){
    this.clicked = !this.clicked;
    console.log(this.clicked);
  }
  gtype(type){
    this.gender = type;
    console.log( this.gender, 'Gender')
  }
  changeFun(){
    this.open = !this.open;
  }

  onClick(){
    this.router.navigate(['send']);
  }
  onClickcolor(jadeja){
    console.log('Click is working');
    this.raina=jadeja;
    this.koli=jadeja;
  }
}
