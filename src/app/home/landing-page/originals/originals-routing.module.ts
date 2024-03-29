import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OriginalsComponent } from './originals.component';

const routes: Routes = [
  {path:'',component:OriginalsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OriginalsRoutingModule { }
