import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clicked = true;
  open = true;
  gender: any;
  constructor() {
    
   }

  ngOnInit() {
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

}
