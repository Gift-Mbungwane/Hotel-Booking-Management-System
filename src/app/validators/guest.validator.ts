import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";
import { ValidationError } from "json-schema";

    export function validateTopic(guest: String): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const isValid = control.value === '' || control.value === guest;

            if(isValid) {
                return null;
            }else {
                return {
                    nameMatch: {
                        allowedName: guest
                    }
                };
            }
        }
    }