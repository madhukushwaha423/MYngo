import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';
import { HomeComponent } from '../home/home.component';




@NgModule({
  declarations: [ViewComponent,HomeComponent],
  imports: [
    CommonModule,
    ViewRoutingModule
  ]
})
export class ViewModule { }
