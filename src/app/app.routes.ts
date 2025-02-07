import { Routes } from '@angular/router';
import { ExampleComponent } from './components/example/example.component';

export const routes: Routes = [
  { path: '', component: ExampleComponent },
  { path: 'example', component: ExampleComponent },
  { path: '**', redirectTo: 'example' },
];
