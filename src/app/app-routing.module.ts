import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path:'home'
  },
  {
    component:AboutComponent,
    path:'about'
  },
  {
    component:ContactComponent,
    path:'contact'
  },
  {
    component:ListComponent,
    path:'list/:id'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
