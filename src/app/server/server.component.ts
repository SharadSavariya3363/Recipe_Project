import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverElements = [{type: 'server', name: 'test server', content: 'just a test'}];

  onServerAdded(serverData:any){
    this.serverElements.push({type: 'server', 
    name: serverData.serverName,
    content: serverData.serverContent})
  }

  onBlueprintAdded(blueprintData:any){
    this.serverElements.push({type: 'blueprint', 
    name: blueprintData.serverName,
    content: blueprintData.serverContent})
  }

  constructor() { console.log('constructor called') }

  ngOnInit(): void {
    console.log('ngOnInit called')
  }


}
