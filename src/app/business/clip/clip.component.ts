import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clip',
  templateUrl: './clip.component.html',
  styleUrls: ['./clip.component.scss']
})
export class ClipComponent implements OnInit {
name: any = 'venkat';
  constructor() { }

  ngOnInit() {
    console.log(this.name)
  }

}
