import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatererComponent } from './caterer/caterer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { ContactComponent } from './contact/contact.component';
import { DecoratorComponent } from './decorator/decorator.component';
import { FormComponent } from './form/form.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Caterer',component:CatererComponent},
  {path:'Portfolio',component:PortfolioComponent},
  {path:'Entertainment',component:EntertainmentComponent},
  {path:'Contact',component:ContactComponent},
  {path:'Decorator',component:DecoratorComponent},  
  {path:'form',component:FormComponent},
  {path:'view',component:ViewComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
