import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'

import { ShowsRoutingModule } from './shows-routing.module';
import { ShowListComponent } from './components/show-list/show-list.component';




@NgModule({
  declarations: [
    ShowListComponent
   
    
  ],
  imports: [
    CommonModule,
    ShowsRoutingModule,
    HttpClientModule
  ]
})
export class ShowsModule { }
