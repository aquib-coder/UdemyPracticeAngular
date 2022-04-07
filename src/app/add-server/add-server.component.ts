import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-server',
  templateUrl: './add-server.component.html',
  styleUrls: ['./add-server.component.css']
})
export class AddServerComponent implements OnInit {
  ngOnInit(): void {
   
  }

  serverElements:any =[]  ;

  OnServerAdded(serverData:{serverName:string,serverContent:string}){
    this.serverElements.push({
      type:'server',
      name:serverData.serverName,
      content:serverData.serverContent
    });
  }

    OnBlueprintAdded(serverData:{serverName:string,serverContent:string}){
      this.serverElements.push({
        type:'blueprint',
        name:serverData.serverName,
        content:serverData.serverContent
      });
    }

}
