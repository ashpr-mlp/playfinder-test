import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'pitch', loadChildren: () => import('./feature/pitch/pitch.module').then(m => m.PitchModule)},
  {
    path: '',
    redirectTo: 'pitch',
    pathMatch: 'full'
  }
];

//    {path: ‘user’, loadChildren: ‘./users/user.module#UserModule’}
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
