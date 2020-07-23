import { FormGroup } from '@angular/forms';

// custom validator to check values of 2 fields must match
export function MatchControlValue(
    controlName: string,
    matchingControlName: string
  ) {
    return (fg: FormGroup) => {
      const control = fg.controls[controlName];
      const matchingControl = fg.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.shouldMatch) {
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ shouldMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
