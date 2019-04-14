import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistComponent } from './playlist/playlist.component';
import {GroupsComponent} from "./groups/groups.component";

const routes: Routes = [
  {
    path: "playlist",
    pathMatch: "full",
    component:PlaylistComponent
  },
  {
    path: "groups",
    pathMatch: "full",
    component:GroupsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
