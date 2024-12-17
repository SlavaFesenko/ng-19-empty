import { Routes } from '@angular/router';
import { PrimaryEntityComponent } from './components/content-projection/primary-entity/primary-entity.component';
import { SignalsBasicComponent } from './components/signals-basic/signals-basic.component';

export const routes: Routes = [
  { path: '', component: SignalsBasicComponent },
  { path: 'ng-content', component: PrimaryEntityComponent },
  { path: 'view-content-child-ren', component: PrimaryEntityComponent },
  { path: 'input-signal', component: PrimaryEntityComponent },
  { path: 'output-signal', component: PrimaryEntityComponent },
  { path: 'model-signal', component: PrimaryEntityComponent },
  { path: '**', redirectTo: '' },
];
