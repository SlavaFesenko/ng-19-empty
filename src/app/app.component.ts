import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  template: `
    <a routerLinkActive="active" routerLink="">Signals Basic</a> |
    <a routerLinkActive="active" routerLink="/ng-content">Content Projection</a>
    |
    <a routerLinkActive="active" routerLink="/view-content-child-ren"
      >View & Content Child(ren)</a
    >
    | <a routerLinkActive="active" routerLink="/input-signal">Input Signal</a> |
    <a routerLinkActive="active" routerLink="/output-signal">Output Signal</a> |
    <a routerLinkActive="active" routerLink="/model-signal">Model Signal</a> |

    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'ng-19-empty';
}
