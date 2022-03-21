import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
n:number=0;
message:string='';
  constructor() { }

  ngOnInit(): void {
  }
IncreaseBy1(){
this.n=this.n+1;
this.message='counter:'+this.n;
}
DecreaseBy1(){
  this.n=this.n-1;
  this.message='counter:'+this.n;
  }
}
