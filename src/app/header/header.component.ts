import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService){}

  onClickSave(){
    this.dataStorageService.storeRecipe();
  }

  onClickFetch(){
    this.dataStorageService.fetchRecipe().subscribe();
  }

}
