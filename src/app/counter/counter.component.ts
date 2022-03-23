import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit,AfterViewInit,AfterContentInit {
  @ViewChild('msg') msg:ElementRef;
  @ContentChild('msg1') msg1:ElementRef;
n:number=0;
message:string='';
  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit called');
    console.log('counter:'+this.msg1.nativeElement.textContent);
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit called');
    console.log('counter:'+this.msg1.nativeElement.textContent);
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit called');
    console.log('counter:'+this.msg1.nativeElement.textContent);
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
