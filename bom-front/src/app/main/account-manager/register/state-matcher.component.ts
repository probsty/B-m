import {ErrorStateMatcher} from "@angular/material/core";
import {FormControl, FormGroupDirective, NgForm} from "@angular/forms";

/*
* Mat-error only shows when a FormControl is invalid, Validation is also in the formgroup.
*/

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return control.parent.errors && control.parent.errors['notSame']
  }
}
