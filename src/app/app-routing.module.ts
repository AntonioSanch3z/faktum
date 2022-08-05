import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { OpenlayerComponent } from './openlayer/openlayer.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { MapComponent } from './pages/map/map.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'map', component:MapComponent, canActivate: [AuthGuard]},
  {path:'ol', component:OpenlayerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
