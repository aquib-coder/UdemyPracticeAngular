import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-elemment',
  templateUrl: './server-elemment.component.html',
  styleUrls: ['./server-elemment.component.css']
})
export class ServerElemmentComponent implements OnInit {
 @Input() element:{name:string,content:string,type:string};
  constructor() { }

  ngOnInit(): void {
  }

}
