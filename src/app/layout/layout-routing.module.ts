import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
      path:'aboutus',
      component:FooterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
