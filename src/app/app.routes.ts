import { Routes } from '@angular/router';
import { SignalsBasicComponent } from './components/signals-basic/signals-basic.component';

export const routes: Routes = [
  { path: '', component: SignalsBasicComponent },
  { path: 'example', component: SignalsBasicComponent },
  { path: '**', redirectTo: 'example' },
];
