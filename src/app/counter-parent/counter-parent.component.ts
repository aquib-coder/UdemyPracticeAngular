import { Component, OnInit, ViewChild } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-counter-parent',
  templateUrl: './counter-parent.component.html',
  styleUrls: ['./counter-parent.component.css']
})
export class CounterParentComponent implements OnInit {
@ViewChild(CounterComponent) CounterComp:CounterComponent;
  constructor() { }
inc1(){
  this.CounterComp.IncreaseBy1();
}
dec1(){
  this.CounterComp.DecreaseBy1();
}
  ngOnInit(): void {
  }

}
