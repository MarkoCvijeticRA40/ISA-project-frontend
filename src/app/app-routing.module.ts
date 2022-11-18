import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./modules/pages/home/home.component";
import { UpdateCenterComponent } from "./modules/pages/update-center/update-center.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin/center-update', component: UpdateCenterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
