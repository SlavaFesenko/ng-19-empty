import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  template: `
    <a routerLinkActive="active" routerLink="">Example</a> |
    <a routerLinkActive="active" routerLink="/other-404">Not created yet</a> |

    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'ng-19-empty';
}
