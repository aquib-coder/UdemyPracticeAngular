import { Component, OnInit, Output , EventEmitter, ViewChild, ElementRef} from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
 @Output() ServerCreated=new EventEmitter<{serverName:string,serverContent:string}>();
 @Output() BlueprintCreated=new EventEmitter<{serverName:string,serverContent:string}>();
 @ViewChild('ServerName') ServerName:ElementRef;
  newServerName:string;
  newServerContent:string;
 
  onAddServer(){
    this.ServerCreated.emit(
      {serverName:this.ServerName.nativeElement.value,
       serverContent:this.newServerContent}
    );
    
  }
onAddBlueprint(){
   this.BlueprintCreated.emit(
    {serverName:this.ServerName.nativeElement.value,
     serverContent:this.newServerContent}
  )
}
  constructor() { }

  ngOnInit(): void {
  }

}
