import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CategoryFilterPipe } from './category-filter.pipe';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CategoryFilterPipe]
})
export class AppComponent {
  title = 'Card View Demo';
  sites: any = [];
  types: any = [];
  filter: String = "Toutes"

  gridColumns = 4;

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }
  
  constructor(private httpClient: HttpClient){}
  ngOnInit(){
    this.httpClient.get("assets/sites.json").subscribe(data =>{
      console.log(data);
      this.sites = data;
    });
    this.httpClient.get("assets/types.json").subscribe(data =>{
      console.log(data);
      this.types = data;
    });

  }
}