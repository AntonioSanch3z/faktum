import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenlayerComponent } from './openlayer/openlayer.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { MapComponent } from './pages/map/map.component';
import { LoginComponent } from './sharepage/login/login.component';


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'map', component:MapComponent},
  {path:'ol', component:OpenlayerComponent},
  {path:'login', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
