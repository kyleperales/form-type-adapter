import { FormControl, FormGroup } from '@angular/forms'

/**
 * @description Explicitly define a property to be a form control.
 * This is useful for FormControls that you want to have a type of Object or Array
 */
export type IExplicitControl = { isFormControl: true } 


/**
 * @description Infer the form controls from a type
 * Todo: Add support for FormArray
 */
export type ControlsOf<T extends Record<string, any>> = {
  [K in keyof T]: 'isFormControl' extends keyof T[K] 
      ? FormControl<Omit<T[K], 'isFormControl'> | null>
      : T[K] extends Record<any, any>
        ? FormGroup<ControlsOf<T[K]>>
        : FormControl<T[K] | null>
}
