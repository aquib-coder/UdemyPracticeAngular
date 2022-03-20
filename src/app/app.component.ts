import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UdemyPractice';
  serverElements =[{type:'server',content:"testContent",name:'testName'}] ;

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
