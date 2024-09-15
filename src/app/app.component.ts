import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { UserDetailsComponent } from './user-details/user-details.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'form-type-adapter';
}
