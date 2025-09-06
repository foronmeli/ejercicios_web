import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function ValidatorPassword(CampoPassword: string, CampoRePasword: string): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const password = formGroup.get(CampoPassword)?.value;
    const rePassword = formGroup.get(CampoRePasword)?.value;

    if (password !== rePassword) {
      return { passwordsIncorrects: true };
    } else {
      return null;
    }
  };
}