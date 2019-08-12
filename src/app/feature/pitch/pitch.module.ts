import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PitchSearchPageComponent } from './pages/pitch-search/pitch-search.component';
import { PitchSearchPageModule } from './pages/pitch-search/pitch-search.module';
import { PitchDetailsPageComponent } from './pages/pitch-details/pitch-details.component';
import { PitchDetailsPageModule } from './pages/pitch-details/pitch-details.module';

const routes: Routes = [
  {
    path: 'search',
    component: PitchSearchPageComponent
  }, {
    path: 'pitch/:id',
    component: PitchDetailsPageComponent
  }, {
    path: '',
    pathMatch: 'full',
    redirectTo: 'search'
  }
];

@NgModule({
  imports: [
    PitchSearchPageModule,
    PitchDetailsPageModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PitchModule { }
