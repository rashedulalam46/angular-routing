import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { NoPageComponent } from './no-page/no-page.component'

const routes: Routes = [
  {
    component: HomeComponent,
    path: ''
  },
  {
    component: AboutComponent,
    path: 'about',
    children: [
      {
        path: 'us', component: AboutUsComponent
      },
      {
        path: 'me', component: AboutMeComponent
      }
    ]
  },
  {
    component: ContactComponent,
    path: 'contact'
  },
  {
    component: ListComponent,
    path: 'list/:id'
  },
  {
    component: NoPageComponent,
    path: '**'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
