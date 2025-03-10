import { Component } from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-authenticated-base-page',
  imports: [RouterOutlet,SideNavComponent, FooterComponent],
  templateUrl: './authenticated-base-page.component.html'
})
export class AuthenticatedBasePageComponent {

}
