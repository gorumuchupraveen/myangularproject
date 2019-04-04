import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import cities from '../../../assets/json/cities.json';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  myCity:any;
  clicked = true;
  
  constructor(
    private router: Router
  ) {
    
   }

  ngOnInit() {
    this.myCity=cities;
  }


  clickFunc(){
    this.clicked = !this.clicked;
    console.log(this.clicked);
  }
  onClick(){
    this.router.navigate(['send']);
  }
}
