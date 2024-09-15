import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field'
import { MatInputModule, MatLabel } from '@angular/material/input'
import { ControlsOf, IExplicitControl } from '../shared/form-type-adapter'

type IUserAddress = { address: string, zipCode: number }
type IUserTask = { title: string, occurenceInAWeek: number }

interface IUserDetail {
  name: string
  age: number
  address: IUserAddress & IExplicitControl
  tasks: IUserTask
}

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [MatInputModule, MatLabel, ReactiveFormsModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }
  ]
})
export class UserDetailsComponent implements OnInit {

  form = new FormGroup<ControlsOf<IUserDetail>>({
    name: new FormControl(null, [Validators.required]),
    age: new FormControl(null),
    address: new FormControl(null),
    tasks: new FormGroup<ControlsOf<IUserTask>>({
      title: new FormControl(null),
      occurenceInAWeek: new FormControl(null)
    })
  })

  ngOnInit(): void {
  }

}
